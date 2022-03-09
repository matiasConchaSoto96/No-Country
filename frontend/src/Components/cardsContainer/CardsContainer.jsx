import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../card/Card";
import "./cardsContainer.css";
import loading from "../../resources/rings.svg";

function CardsContainer() {
  const { products, filter, request, setRequest, fetchAndSetProducts } =
    useContext(AppContext);

  useEffect(() => {
    if (request) {
      fetchAndSetProducts();
      setRequest(false);
    }
  }, [request]);

  let filterProducts = products.filter((product) => {
    if (filter === "") {
      return true;
    } else {
      return filter === product.categories.name;
    }
  });

  return (
    <div className="cards-container">
      {filterProducts.length > 0 ? (
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
      )}
    </div>
  );
}

export default CardsContainer;
