import React from "react";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import Counter from "../counter/Counter";
import "./card.css";
import uno from "../../resources/uno.jpeg";

function Card({ id, name, description, price, stock, category }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img className="card-image" src={uno} alt="img" />
        <div className="card-buttons-container">
          {/* <button className="card-buttons-delete">B</button> */}
          <PopupDelete id={id} />
          <button className="card-buttons-edit">E</button>
        </div>
      </div>
      <h3>{name}</h3>
      <p>
        {description}
        {category}
      </p>
      <div>
        <div className="card-price">{price}</div>
        <Counter stock={stock} id={id} />
      </div>
    </div>
  );
}

function PopupDelete({ id }) {
  let navigate = useNavigate();

  function deleteProduct(id) {
    fetch(`http://localhost:3001/api/delete/${id}`, {
      method: "DELETE",
    });
  }

  return (
    <Popup
      className="popup-background"
      trigger={<button className="card-buttons-delete"> B </button>}
      modal
    >
      {(close) => (
        <div className="modal-container">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="popup-text">
            ¿Está seguro de que desea eliminar este producto?
          </div>
          <div className="popup-btn-container">
            <button
              className="popup-btn"
              onClick={() => {
                close();
                navigate("/");
              }}
            >
              Cancelar
            </button>
            <button
              className="popup-btn"
              onClick={() => {
                deleteProduct(id);
                close();
                navigate("/");
              }}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default Card;
