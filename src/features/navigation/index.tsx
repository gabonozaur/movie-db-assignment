import { Link } from "react-router-dom";
import { MyRoutes } from "../../types";
import classNames from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={classNames.container}>
      <Link to={MyRoutes.home}>Home</Link>
      <Link to={MyRoutes.favorites}>Favorites</Link>
    </div>
  );
};

export default Navigation;
