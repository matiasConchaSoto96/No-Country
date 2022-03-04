import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
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
  const [errors, setErrors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [recent, setRecent] = useState([]);
  const [request, setRequest] = useState(true);
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    stock: "",
    discount: "",
    id_category: "",
    categories: {
      id: "",
      name: "",
    },
  });
  const [edit, setEdit] = useState(false);

  const fetchAndSetProducts = () => {
    let endpointRequest = `http://localhost:3001/api`;

    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.data);
      });
  };

  const deleteProduct = (id) => {
    fetch(`http://localhost:3001/api/delete/${id}`, {
      method: "DELETE",
    });

    setRequest(true);
  };

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
        errors,
        setErrors,
        categories,
        setCategories,
        filter,
        setFilter,
        recent,
        setRecent,
        fetchAndSetProducts,
        deleteProduct,
        request,
        setRequest,
        newProduct,
        setNewProduct,
        edit,
        setEdit,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
