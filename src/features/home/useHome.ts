import { useContext, useEffect, useRef, useState } from "react";
import apiClient from "../../utils/apiClient";
import { MovieDTO } from "../movies/types";
import { NameWithId } from "../../types";
import { SelectedCategories } from "./types";
import { ErrorHandlerContext } from "../common/errorHandler";

const abortReason = "aborted";

const useHome = () => {
  const [data, setData] = useState<MovieDTO[]>([]);
  const [input, setInput] = useState("");
  const [fetching, setFetching] = useState(true);
  const requestRef = useRef<AbortController>();
  const [categories, setCategories] = useState<NameWithId[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [selectedCategories, setSelectedCategories] =
    useState<SelectedCategories>({});
  const { handleReqError } = useContext(ErrorHandlerContext);

  const generateParams = (selectedPage: number) => {
    let genreInput = "";

    for (let index in selectedCategories) {
      if (selectedCategories[index]) {
        genreInput += index + ",";
      }
    }

    const params = new URLSearchParams();
    if (input) {
      params.append("query", input);
    }
    if (genreInput) {
      params.append("with_genres", genreInput);
    }
    if (page) {
      params.append("page", selectedPage + "");
    }

    return params.toString();
  };

  const fetchData = async (
    onSuccess: (values: MovieDTO[]) => void,
    selectedPage: number = 1
  ) => {
    setFetching(true);
    requestRef.current?.abort(abortReason);
    requestRef.current = new AbortController();

    try {
      const res = await apiClient.get(
        `/${input ? "search" : "discover"}/movie?` +
          generateParams(selectedPage),
        {
          signal: requestRef.current.signal,
        }
      );
      onSuccess(res.data.results);
      setPage(selectedPage);
      setMaxPage(res.data.total_pages);
      setFetching(false);
    } catch (e: any) {
      if (e.message !== abortReason) {
        handleReqError(e);
        setFetching(false);
      }
    }
  };
  const fetchCategories = async () => {
    try {
      const res = await apiClient.get("/genre/movie/list");
      setCategories(res.data.genres);
    } catch (e) {
      handleReqError(e);
    }
  };

  const onFetchMore = () => {
    if (fetching) {
      return;
    }

    fetchData((values) => {
      setData([...data, ...values]);
    }, page + 1);
  };
  useEffect(() => {
    const timeout = setTimeout(
      () =>
        fetchData((values) => {
          setData(values);
        }),
      500
    );

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
    onFetchMore,
    maxPage,
    page,
  };
};

export default useHome;
