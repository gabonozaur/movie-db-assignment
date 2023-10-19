import { useEffect } from "react";
import Movies from "../movies";
import classNames from "./Home.module.scss";
import useHome from "./useHome";
import Navigation from "../navigation";
import LoadableWrapper from "../common/LoadableWrapper";

const Home = () => {
  const { data, fetching, input, setInput } = useHome();

  useEffect(() => {
    if (fetching) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [fetching]);
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
      <LoadableWrapper>
        <Movies movies={data ?? []} />
      </LoadableWrapper>
    </div>
  );
};

export default Home;
