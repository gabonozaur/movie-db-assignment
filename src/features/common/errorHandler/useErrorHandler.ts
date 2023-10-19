import { useEffect, useState } from "react";

const useErrorHandler = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage("");
      }, 1500);
    }
  }, [message]);

  const handleReqError = (e: any) => {
    setMessage(e.response.data.status_message);
  };

  return { setMessage, message, handleReqError };
};

export default useErrorHandler;
