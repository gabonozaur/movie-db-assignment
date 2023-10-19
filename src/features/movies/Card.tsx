import { FC } from "react";
import { imageBaseUrl } from "../../utils/constants";
import LoadableWrapper from "../common/LoadableWrapperr";
import classNames from "./Card.module.scss";
import { MovieDTO } from "./types";

const CardMovies: FC<{
  data: MovieDTO;
  onClick: () => void;
  loading?: boolean;
  buttonText: string;
}> = ({ data, onClick, loading, buttonText }) => {
  const { title, release_date, poster_path } = data;
  return (
    <div className={classNames.container}>
      <p className={classNames.title}>Title {title}</p>
      <p className={classNames.release}>Release {release_date}</p>
      <LoadableWrapper loading={loading} className={classNames.buttonContainer}>
        <button onClick={onClick} className={classNames.button}>
          {buttonText}
        </button>
      </LoadableWrapper>
      <img
        className={classNames.img}
        src={poster_path ? `${imageBaseUrl}${poster_path}` : "picture.png"}
      />
    </div>
  );
};

export default CardMovies;
