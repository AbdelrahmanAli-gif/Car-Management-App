import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Snackbar } from "@mui/material";

const MessageContext = createContext();

const MessageProvider = ({ children }) => {
  const [{ message, show }, setMessage] = useState({
    message: "",
    show: false,
  });

  const handleClose = () => {
    setTimeout(() => {
      setMessage({ ...message, show: false });
    }, 2000);
  };

  const updateMessage = (message) => {
    setMessage({ message, show: true });
    handleClose();
  };

  return (
    <MessageContext.Provider value={{ updateMessage }}>
      {show && <Snackbar open={show} message={message} />}
      {children}
    </MessageContext.Provider>
  );
};

MessageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const useMessage = () => {
  const context = useContext(MessageContext);
  if (context === undefined)
    throw new Error("MessageContext was used outside of the MessageProvider");
  return context;
};

export { MessageProvider, useMessage };
