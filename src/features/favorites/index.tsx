import LoadableWrapper from "../common/LoadableWrapperr";
import Movies from "../movies";
import Navigation from "../navigation";
import useFavorites from "./useFavorites";

const Favorites = () => {
  const { data, fetching, onRefresh, onFetchMore, page, maxPage } =
    useFavorites();

  return (
    <div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies
          movies={data ?? []}
          hideGetMore={page == maxPage}
          removeFromFavorites
          onChangeFavorite={onRefresh}
          onFetchMore={onFetchMore}
        />
      </LoadableWrapper>
    </div>
  );
};

export default Favorites;
