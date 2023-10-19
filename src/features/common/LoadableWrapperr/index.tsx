import { FC, useEffect } from "react";
import classNames from "./LoadableWrapper.module.scss";

const LoadableWrapper: FC<{
  loading?: boolean;
  children: any;
  className?: string;
}> = ({ children, loading, className }) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div className={classNames.container + " " + className}>
      {loading ? <div className={classNames.loading}>Thinking</div> : null}

      {children}
    </div>
  );
};

export default LoadableWrapper;
