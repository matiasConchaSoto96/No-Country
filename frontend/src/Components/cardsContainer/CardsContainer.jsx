import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../card/Card";
import "./cardsContainer.css";
import loading from "../../resources/rings.svg";

function CardsContainer() {
  const {
    products,
    filter,
    request,
    setRequest,
    fetchAndSetProducts,
    isLoading,
  } = useContext(AppContext);

  useEffect(() => {
    if (request) {
      fetchAndSetProducts();
      setRequest(false);
    }
  }, [request]);

  let filterProducts = products.filter((product) => {
    if (filter === "Todos") {
      return true;
    } else {
      return filter === product.categories.name;
    }
  });

  return (
    <div className="cards-container">
      {isLoading ? (
        <div className="loading-container">
          <img src={loading} alt="Loader" className="loader" />
        </div>
      ) : filterProducts.length > 0 ? (
        filterProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.categories.name}
            image={product.images.image}
          />
        ))
      ) : (
        <h2>No hay productos en esta categoria</h2>
      )}
      {/* {filterProducts.length > 0 ? (
        filterProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.categories.name}
            image={product.images.image}
          />
        ))
      ) : (
        <div className="loading-container">
          <img src={loading} alt="Loader" className="loader" />
        </div>
      )} */}
    </div>
  );
}

export default CardsContainer;
