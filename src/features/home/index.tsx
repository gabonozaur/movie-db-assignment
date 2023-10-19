import LoadableWrapper from "../common/LoadableWrapper";
import Movies from "../movies";
import Navigation from "../navigation";
import Filter from "./Filter";
import classNames from "./Home.module.scss";
import useHome from "./useHome";

const Home = () => {
  const {
    data,
    fetching,
    input,
    setInput,
    categories,
    setSelectedCategories,
    selectedCategories,
    onFetchMore,
    page,
    maxPage,
    didLoadMore,
  } = useHome();

  return (
    <div>
      <div className={classNames.flexContainer}>
        <input
          className={classNames.input}
          defaultValue={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies
          hideGetMore={page == maxPage || didLoadMore || fetching}
          onFetchMore={onFetchMore}
          movies={data ?? []}
        />
      </LoadableWrapper>
    </div>
  );
};

export default Home;
