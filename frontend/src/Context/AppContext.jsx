import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    logged: false,
  });
  const [newUser, setNewUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    logged: false,
  });
  const [register, setRegister] = useState(false);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [categories, setCategories] = [];

  return (
    <AppContext.Provider
      value={{
        open,
        setOpen,
        user,
        setUser,
        register,
        setRegister,
        products,
        setProducts,
        openModal,
        setOpenModal,
        newUser,
        setNewUser,
        categories,
        setCategories,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
