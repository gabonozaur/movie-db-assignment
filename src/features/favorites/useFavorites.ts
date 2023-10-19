import { useEffect, useState } from "react";
import apiClient from "../../utils/apiClient";
import { accountId } from "../../utils/constants";
import { MovieDTO } from "../movies/types";

const useFavorites = () => {
  const [data, setData] = useState<MovieDTO[]>([]);
  const [fetching, setFetching] = useState(true);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const fetchData = async (
    onSuccess: (values: MovieDTO[]) => void,
    selectedPage: number = 1
  ) => {
    setFetching(true);

    const params = new URLSearchParams();

    if (page) {
      params.append("page", selectedPage + "");
    }

    try {
      const res = await apiClient.get(
        `/account/${accountId}/favorite/movies?` + params,
        {}
      );
      onSuccess(res.data.results);
      setPage(selectedPage);
      setMaxPage(res.data.total_pages);
      setFetching(false);
    } catch (e: any) {}
    setFetching(false);
  };

  const onFetchMore = () => {
    if (fetching) {
      return;
    }
    fetchData((values) => {
      setData([...data, ...values]);
    }, page + 1);
  };

  const onRefresh = () => {
    fetchData((values) => {
      setData(values);
    });
  };

  useEffect(() => {
    onRefresh();
  }, []);

  return {
    data,
    fetching,
    fetchData,
    onRefresh,
    onFetchMore,
    maxPage,
    page,
  };
};

export default useFavorites;
