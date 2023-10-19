import LoadableWrapper from "../common/LoadableWrapper";
import Movies from "../movies";
import Navigation from "../navigation";
import useFavorites from "./useFavorites";

const Favorites = () => {
  const { data, fetching, fetchData } = useFavorites();

  return (
    <div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies
          movies={data ?? []}
          removeFromFavorites
          onChangeFavorite={fetchData}
        />
      </LoadableWrapper>
    </div>
  );
};

export default Favorites;
