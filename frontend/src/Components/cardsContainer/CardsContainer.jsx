import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../card/Card";
import "./cardsContainer.css";
import loading from "../../resources/rings.svg";

function CardsContainer() {
  const { products } = useContext(AppContext);

  // useEffect(() => {
  //   let endpointRequest = `http://localhost:3001/api`;
  //   fetch(endpointRequest)
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setProducts(data.data);
  //       console.log(products);
  //     });
  // }, []);

  return (
    <div className="cards-container">
      {products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.id_category}
          />
        ))
      ) : (
        <img src={loading} alt="Loader" className="loader" />
      )}
    </div>
  );
}

export default CardsContainer;
