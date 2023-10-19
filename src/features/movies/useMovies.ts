import { useState } from "react";
import apiClient from "../../utils/apiClient";

const useMovies = () => {
  const [idChangingStatus, setIdChangingStatus] = useState(0);

  const changeStatus = async (id: number, newStatus: boolean) => {
    if (idChangingStatus) {
      return;
    }
    setIdChangingStatus(id);
    try {
      await apiClient.post("/account/20591884/favorite", {
        media_type: "movie",
        media_id: id,
        favorite: newStatus,
      });
      setIdChangingStatus(0);
    } catch (e) {}
  };

  return { changeStatus, idChangingStatus };
};

export default useMovies;
