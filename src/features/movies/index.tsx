import { FC } from "react";
import CardMovies from "./Card";
import classNames from "./Movies.module.scss";
import { MoviesProps } from "./types";
import useMovies from "./useMovies";

const Movies: FC<MoviesProps> = (props) => {
  const { changeStatus, idChangingStatus, ref } = useMovies(props);
  const { movies, hideGetMore } = props;
  return (
    <>
      <div className={classNames.container}>
        {movies.length ? (
          <>
            {movies.map((movie) => (
              <CardMovies
                buttonText={
                  props.removeFromFavorites ? "Remove Fav" : "Add to Fav"
                }
                loading={idChangingStatus === movie.id}
                onClick={() => {
                  changeStatus(movie.id);
                }}
                key={movie.id}
                data={movie}
              />
            ))}
          </>
        ) : (
          <>No movies to show</>
        )}
      </div>
      {!hideGetMore && movies?.length ? (
        <div ref={ref} className={classNames.loaderBar}>
          we getting more
        </div>
      ) : null}
    </>
  );
};

export default Movies;
