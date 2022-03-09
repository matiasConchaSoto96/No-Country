import React from "react";
import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState([]);

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
  const [idToEdit, setIdToEdit] = useState("");
  const [productToEdit, setProductToEdit] = useState({
    id: "",
    name: "",
    price: "",
    description: "",
    stock: "",
    featured: "",
    discount: "",
    id_category: "",
    categories: {
      id: "",
      name: "",
    },
  });

  // Get and setProducts
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

  const createProduct = (newProduct) => {
    let endpointRequest = `http://localhost:3001/api/`;

    fetch(`${endpointRequest}`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
       },
    })
          
    setRequest(true);
  }
  

  // Put method
  const editProduct = (editedProduct) => {
    let endpointRequest = `http://localhost:3001/api/update`;
    console.log(editedProduct)

    fetch(`${endpointRequest}/${productToEdit.id}`, {
      method: "PUT",
      body: JSON.stringify(editedProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    setRequest(true);
  };

  // Delete method
  const deleteProduct = (id) => {
    let endpointRequest = `http://localhost:3001/api/delete/`;

    fetch(`${endpointRequest}${id}`, {
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
        productToEdit,
        setProductToEdit,
        idToEdit,
        setIdToEdit,
        newProduct,
        setNewProduct,
        editProduct,
        createProduct
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
