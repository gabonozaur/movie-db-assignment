import { useEffect, useRef, useState } from "react";
import apiClient from "../../utils/apiClient";
import { MovieDTO } from "../movies/types";
import { accountId } from "../../utils/constants";

const abortReason = "aborted";

const useFavorites = () => {
  const [data, setData] = useState<MovieDTO[]>();
  const [fetching, setFetching] = useState(true);
  const requestRef = useRef<AbortController>();

  const fetchData = async () => {
    setFetching(true);
    requestRef.current?.abort(abortReason);
    requestRef.current = new AbortController();

    try {
      const res = await apiClient.get(`/account/${accountId}/favorite/movies`, {
        signal: requestRef.current.signal,
      });
      setData(res.data.results);
      setFetching(false);
    } catch (e: any) {
      if (e.message !== abortReason) {
        setFetching(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetching, fetchData };
};

export default useFavorites;
