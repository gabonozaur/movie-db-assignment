import { useEffect, useRef, useState } from "react";
import apiClient from "../../utils/apiClient";
import { MovieDTO } from "../movies/types";

const abortReason = "aborted";

const useHome = () => {
  const [data, setData] = useState<MovieDTO[]>();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(true);
  const requestRef = useRef<AbortController>();

  const fetchData = async () => {
    setFetching(true);
    requestRef.current?.abort(abortReason);
    requestRef.current = new AbortController();

    try {
      const res = await apiClient.get(
        `/${input ? "search" : "discover"}/movie?query=` + input,
        {
          signal: requestRef.current.signal,
        }
      );
      setData(res.data.results);
      setFetching(false);
    } catch (e: any) {
      if (e.message !== abortReason) {
        setFetching(false);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  return { data, fetching, input, setInput };
};

export default useHome;
