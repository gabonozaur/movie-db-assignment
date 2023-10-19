import { FC, useEffect } from "react";

const containeStyle: React.CSSProperties = {
  position: "relative",
};

const loadingStyle: React.CSSProperties = {
  position: "absolute",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  opacity: 0.8,
  display: "flex",
  zIndex: 100,
  backgroundColor: "white",
  justifyContent: "center",
};

const LoadableWrapper: FC<{ loading?: boolean; children: any }> = ({
  children,
  loading,
}) => {
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <div style={containeStyle}>
      {loading ? <div style={loadingStyle}>Thinking</div> : null}

      {children}
    </div>
  );
};

export default LoadableWrapper;
