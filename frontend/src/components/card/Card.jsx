import React from "react";
import Counter from "../counter/Counter";
import "./card.css";
import uno from "../../resources/uno.jpeg";

function Card() {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={uno} alt="img" />
        <div className="card-buttons-container">
          <button className="card-buttons-delete">B</button>
          <button className="card-buttons-edit">E</button>
        </div>
      </div>

      <h3>Nombre del producto</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper
        tortor accumsan, purus donec et tortor in placerat. Nunc pellentesque
        facilisis congue ac gravida tortor vitae.
      </p>
      <div>
        <div className="card-price">Precio</div>
        <Counter />
      </div>
    </div>
  );
}

export default Card;
