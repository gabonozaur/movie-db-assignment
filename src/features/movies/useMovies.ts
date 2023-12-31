import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import apiClient from "../../utils/apiClient";
import { accountId } from "../../utils/constants";
import { MoviesProps } from "./types";

const useMovies = (props: MoviesProps) => {
  const [idChangingStatus, setIdChangingStatus] = useState(0);
  const { ref, inView } = useInView();

  const changeStatus = async (id: number) => {
    if (idChangingStatus) {
      return;
    }
    setIdChangingStatus(id);
    try {
      await apiClient.post(`/account/${accountId}/favorite`, {
        media_type: "movie",
        media_id: id,
        favorite: !props.removeFromFavorites,
      });
      props.onChangeFavorite?.();
    } catch (e) {}

    setIdChangingStatus(0);
  };

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        props.onFetchMore?.();
      }, 200);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [inView]);

  return { changeStatus, idChangingStatus, ref };
};

export default useMovies;
