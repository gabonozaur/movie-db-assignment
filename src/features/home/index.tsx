import { useEffect } from "react";
import Movies from "../movies";
import classNames from "./Home.module.scss";
import useHome from "./useHome";
import Navigation from "../navigation";

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
      <div className={classNames.containerGrid}>
        {fetching ? <div className={classNames.loading}>Thinking</div> : null}
        <Movies movies={data ?? []} />
      </div>
    </div>
  );
};

export default Home;
