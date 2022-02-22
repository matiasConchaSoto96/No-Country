import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    logged: false
  });
  const [registro, setRegistro] = useState(false)


  return (
    <AppContext.Provider value={{ count, setCount, open, setOpen, user, setUser, registro, setRegistro }}>
      {props.children}
    </AppContext.Provider>
  );
};
