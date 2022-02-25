import React, { useContext, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AppContext } from "./Context/AppContext";
import Home from "./Pages/home/Home";
import Products from "./Pages/products/Products";
import { Login } from "./Pages/login/Login";

function App() {
  const { user, setUser } = useContext(AppContext);

  useEffect(() => {
    const loggedUser = window.localStorage.getItem("user")
    if(loggedUser){
        setUser({...user, logged: true, name: loggedUser.name, email: loggedUser.email, password: loggedUser.password, lastname: loggedUser.lastname })
    }
  }, [])

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={user.logged ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/products" element={<Products />} />
        <Route
          exact
          path="/"
          element={user.logged ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
