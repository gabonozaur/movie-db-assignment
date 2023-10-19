import { useEffect, useRef, useState } from "react";
import apiClient from "../../utils/apiClient";
import { MovieDTO } from "../movies/types";
import { NameWithId } from "../../types";
import { SelectedCategories } from "./types";

const abortReason = "aborted";

const useHome = () => {
  const [data, setData] = useState<MovieDTO[]>();
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(true);
  const requestRef = useRef<AbortController>();
  const [categories, setCategories] = useState<NameWithId[]>([]);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategories>({});

  const fetchData = async () => {
    setFetching(true);
    requestRef.current?.abort(abortReason);
    requestRef.current = new AbortController();

    let genreInput = "";

    for (let index in selectedCategories) {
      if (selectedCategories[index]) {
        genreInput += index + ",";
      }
    }
    try {
      const res = await apiClient.get(
        `/${input ? "search" : "discover"}/movie?query=` +
          input +
          " &with_genres=" +
          genreInput,
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
  const fetchCategories = async () => {
    try {
      const res = await apiClient.get("/genre/movie/list");
      setCategories(res.data.genres);
    } catch (e) {}
  };

  useEffect(() => {
    const timeout = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [input, selectedCategories]);

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    data,
    fetching,
    input,
    setInput,
    fetchData,
    categories,
    selectedCategories,
    setSelectedCategories,
  };
};

export default useHome;
