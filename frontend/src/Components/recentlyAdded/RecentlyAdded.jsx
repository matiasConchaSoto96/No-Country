import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import Card from "../card/Card";
import "../cardsContainer/cardsContainer.css";
import loading from "../../resources/rings.svg";

function RecentlyAdded() {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div className="cards-container">
      {products.length > 0 ? (
        products
          .slice(products.length - 8, products.length)
          .map((product) => (
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

export default RecentlyAdded;
