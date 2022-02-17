import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
// import { AppContext } from "./Context/AppContext";
import Home from "./Pages/home/Home";
import Products from "./Pages/products/Products";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
