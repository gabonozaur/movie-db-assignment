import { useState } from "react";
import apiClient from "../../utils/apiClient";
import { accountId } from "../../utils/constants";
import { MoviesProps } from "./types";

const useMovies = (props: MoviesProps) => {
  const [idChangingStatus, setIdChangingStatus] = useState(0);

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

  return { changeStatus, idChangingStatus };
};

export default useMovies;
