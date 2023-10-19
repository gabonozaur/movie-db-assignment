import { FC } from "react";
import { imageBaseUrl } from "../../utils/constants";
import classNames from "./Card.module.scss";
import { MovieDTO } from "./types";
import LoadableWrapper from "../common/LoadableWrapper";

const CardMovies: FC<{
  data: MovieDTO;
  onClick: () => void;
  loading?: boolean;
}> = ({ data, onClick, loading }) => {
  const { title, release_date, poster_path } = data;
  return (
    <div className={classNames.container}>
      <p className={classNames.title}>Title {title}</p>
      <p className={classNames.release}>Release {release_date}</p>
      <LoadableWrapper loading={loading}>
        <button onClick={onClick}>{"Add to fav"}</button>
      </LoadableWrapper>
      <img
        className={classNames.img}
        src={poster_path ? `${imageBaseUrl}${poster_path}` : "picture.png"}
      />
    </div>
  );
};

export default CardMovies;
