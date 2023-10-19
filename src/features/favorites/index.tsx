import LoadableWrapper from "../common/LoadableWrapper";
import Movies from "../movies";
import Navigation from "../navigation";
import useFavorites from "./useFavorites";

const Favorites = () => {
  const { data, fetching, onRefresh, onFetchMore, page, maxPage, didLoadMore } =
    useFavorites();

  return (
    <div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies
          movies={data ?? []}
          hideGetMore={page == maxPage || fetching || didLoadMore}
          removeFromFavorites
          onChangeFavorite={onRefresh}
          onFetchMore={onFetchMore}
        />
      </LoadableWrapper>
    </div>
  );
};

export default Favorites;
