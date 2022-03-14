import React from "react";
import "./card.css";
import uno from "../../resources/uno.jpeg";

function RecentCard({ name, description, price, stock, category }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={uno} alt="img" />
      </div>
      <div className="info-card-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="container-data">Categoria: {category}</span>
        <div className="recent-card-bottom">
          <div className="card-price">$ {price}</div>
          <div className="container-data">Stock: {stock}</div>
        </div>
      </div>
    </div>
  );
}

export default RecentCard;
