import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import RecentCard from "../card/RecentCard";
import "../cardsContainer/cardsContainer.css";
import loading from "../../resources/rings.svg";

function RecentlyAdded() {
  const { recent, setRecent } = useContext(AppContext);

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let recent = data.data.slice(data.data.length - 8, data.data.length);
        setRecent(recent);
      });
  }, []);

  return (
    <div className="cards-container">
      {recent.length > 0 ? (
        recent.map((product) => (
          <RecentCard
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

export default RecentlyAdded;
