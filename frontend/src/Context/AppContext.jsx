import React from "react";
import axios from "axios";
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
  const [filter, setFilter] = useState("Todos");
  const [recent, setRecent] = useState([]);
  const [request, setRequest] = useState(true);
  const [idToEdit, setIdToEdit] = useState("");
  const [isLoading, setIsLoading] = useState(true);
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
    images: {
      id: "",
      image: "",
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

    setIsLoading(false);
  };

  // Post method
  const createProduct = (newProduct) => {
    let endpointRequest = `http://localhost:3001/api/`;

    fetch(`${endpointRequest}`, {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    setRequest(true);
  };

  // Put method
  const editProduct = (editedProduct, file) => {
    let endpointRequest = `http://localhost:3001/api/update`;
    let imageRequest = `http://localhost:3001/api/images/update/${editedProduct.images.id}`;

    const formData = new FormData();
    formData.append("image", file);

    axios.put(`${imageRequest}`, formData, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

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

  // Get and setCategories
  const fetchAndSetCategories = () => {
    let endpointRequest = `http://localhost:3001/api/categorias`;

    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  };

  // Post method category
  const createNewCategory = (category) => {
    let endpointRequest = `http://localhost:3001/api/categorias`;

    fetch(`${endpointRequest}`, {
      method: "POST",
      body: JSON.stringify(category),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
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
        createProduct,
        createNewCategory,
        isLoading,
        setIsLoading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
