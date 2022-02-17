import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <AppContext.Provider value={{ count, setCount, open, setOpen }}>
      {props.children}
    </AppContext.Provider>
  );
};
