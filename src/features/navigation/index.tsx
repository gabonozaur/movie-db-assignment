import { Link, useLocation } from "react-router-dom";
import { MyRoutes } from "../../types";
import classNames from "./Navigation.module.scss";

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <div className={classNames.container}>
      {pathname != MyRoutes.home ? <Link to={MyRoutes.home}>Home</Link> : null}
      {pathname != MyRoutes.favorites ? (
        <Link to={MyRoutes.favorites}>Favorites</Link>
      ) : null}
      {pathname != MyRoutes.categories ? (
        <Link to={MyRoutes.categories}>Categories</Link>
      ) : null}
    </div>
  );
};

export default Navigation;
