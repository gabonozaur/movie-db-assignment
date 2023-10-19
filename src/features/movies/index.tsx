import { FC } from "react";
import CardMovies from "./Card";
import classNames from "./Movies.module.scss";
import { MovieDTO } from "./types";
import useMovies from "./useMovies";

const Movies: FC<{ movies: MovieDTO[] }> = ({ movies }) => {
  const { changeStatus, idChangingStatus } = useMovies();
  return (
    <div className={classNames.container}>
      {movies.length ? (
        movies.map((movie) => (
          <CardMovies
            loading={idChangingStatus === movie.id}
            onClick={() => {
              changeStatus(movie.id, true);
            }}
            key={movie.id}
            data={movie}
          />
        ))
      ) : (
        <>No movies to show</>
      )}
    </div>
  );
};

export default Movies;
