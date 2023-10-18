import { FC } from "react";
import { imageBaseUrl } from "../../utils/constants";
import classNames from "./Movies.module.scss";
import { MovieDTO } from "./types";
import CardMovies from "./Card";

const Movies: FC<{ movies: MovieDTO[] }> = ({ movies }) => {
  return (
    <div className={classNames.container}>
      {movies.length ? (
        movies.map((movie) => <CardMovies key={movie.id} data={movie} />)
      ) : (
        <>No movies to show</>
      )}
    </div>
  );
};

export default Movies;
