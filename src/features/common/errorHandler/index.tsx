import { FC, createContext, useContext } from "react";
import useErrorHandler from "./useErrorHandler";
import { ErroHandlerProps } from "./types";
import { createPortal } from "react-dom";
import classNames from "./ErrorHandler.module.scss";

export const ErrorHandlerContext = createContext<ErroHandlerProps>(
  {} as ErroHandlerProps
);

export const ErrorHandlerProvider: FC<{ children: any }> = ({ children }) => {
  const values = useErrorHandler();

  return (
    <ErrorHandlerContext.Provider value={values}>
      {children}
    </ErrorHandlerContext.Provider>
  );
};
export const ErrorHandler = () => {
  const { message } = useContext(ErrorHandlerContext);
  return message
    ? createPortal(
        <div className={classNames.container}>{message} </div>,
        document.body
      )
    : null;
};
