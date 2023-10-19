import LoadableWrapper from "../common/LoadableWrapper";
import Movies from "../movies";
import Navigation from "../navigation";
import classNames from "./Home.module.scss";
import useHome from "./useHome";

const Home = () => {
  const { data, fetching, input, setInput, fetchData } = useHome();

  return (
    <div>
      <input
        className={classNames.input}
        defaultValue={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Navigation />
      <LoadableWrapper loading={fetching}>
        <Movies movies={data ?? []} onChangeFavorite={fetchData} />
      </LoadableWrapper>
    </div>
  );
};

export default Home;
