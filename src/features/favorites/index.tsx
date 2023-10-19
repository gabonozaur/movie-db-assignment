import LoadableWrapper from "../common/LoadableWrapper";
import Movies from "../movies";
import Navigation from "../navigation";
import useFavorites from "./useFavorites";

const Favorites = () => {
  const { data, fetching } = useFavorites();

  return (
    <div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies movies={data ?? []} />
      </LoadableWrapper>
    </div>
  );
};

export default Favorites;
