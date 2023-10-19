import { useEffect, useState } from "react";
import apiClient from "../../utils/apiClient";
import { accountId } from "../../utils/constants";
import { MovieDTO } from "../movies/types";

const useFavorites = () => {
  const [data, setData] = useState<MovieDTO[]>();
  const [fetching, setFetching] = useState(true);

  const fetchData = async () => {
    setFetching(true);

    try {
      const res = await apiClient.get(
        `/account/${accountId}/favorite/movies`,
        {}
      );
      setData(res.data.results);
      setFetching(false);
    } catch (e: any) {}
    setFetching(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetching, fetchData };
};

export default useFavorites;
