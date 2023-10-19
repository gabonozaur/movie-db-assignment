import LoadableWrapper from "../common/loadableWrapper";
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
  } = useHome();

  return (
    <div>
      <div className={classNames.flexContainer}>
        <input
          className={classNames.input}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setInput("");
          }}
          disabled={!input}
        >
          clear
        </button>
        <Filter
          categories={categories}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />
      </div>
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies
          hideGetMore={page == maxPage}
          onFetchMore={onFetchMore}
          movies={data ?? []}
        />
      </LoadableWrapper>
    </div>
  );
};

export default Home;
