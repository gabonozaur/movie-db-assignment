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
    fetchData,
    categories,
    setSelectedCategories,
    selectedCategories,
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
        <Movies movies={data ?? []} onChangeFavorite={fetchData} />
      </LoadableWrapper>
    </div>
  );
};

export default Home;
