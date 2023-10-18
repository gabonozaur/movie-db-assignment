import { FC } from "react";
import { MovieDTO } from "./types";
import { imageBaseUrl } from "../../utils/constants";
import classNames from "./Card.module.scss";

const CardMovies: FC<{ data: MovieDTO }> = ({ data }) => {
  const { title, release_date, poster_path } = data;
  return (
    <div className={classNames.container}>
      <p className={classNames.title}>Title {title}</p>
      <p className={classNames.release}>Release {release_date}</p>
      <img
        className={classNames.img}
        src={poster_path ? `${imageBaseUrl}${poster_path}` : "picture.png"}
      />
    </div>
  );
};

export default CardMovies;
