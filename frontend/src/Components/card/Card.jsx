import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "./card.css";

function Card({ id, name, description, price, stock, category, image }) {
  return (
    <div className="card-container">
      <div className="image-container">
      
        <img className="card-image" src={`images/${image}`} alt="img" />
      </div>
      <div className="info-card-container">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="container-data">Categoria: {category}</span>
        <div>
          <div className="card-price">$ {price}</div>
          <div className="container-data">Stock: {stock}</div>
        </div>
        <div className="buttons-container">
          <PopupDelete id={id} />
          <EditProduct id={id} />
        </div>
      </div>
    </div>
  );
}

function EditProduct({ id }) {
  const { setIdToEdit } = useContext(AppContext);
  let navigate = useNavigate();

  return (
    <Popup
      className="popup-background"
      trigger={<button className="card-buttons"> Editar </button>}
      modal
    >
      {(close) => (
        <div className="modal-container">
          <a className="close" onClick={close}>
            &times;
          </a>
          <div className="popup-text">
            ¿Está seguro de que desea editar este producto?
          </div>
          <div className="popup-btn-container">
            <button
              className="popup-btn"
              onClick={() => {
                close();
              }}
            >
              Cancelar
            </button>
            <button
              className="popup-btn"
              onClick={() => {
                setIdToEdit(id);
                close();
                navigate("/editproduct");
              }}
            >
              editar
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

function PopupDelete({ id }) {
  const { deleteProduct } = useContext(AppContext);

  return (
    <Popup
      className="popup-background"
      trigger={<button className="card-buttons"> Eliminar </button>}
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
              }}
            >
              Cancelar
            </button>
            <button
              className="popup-btn"
              onClick={() => {
                deleteProduct(id);
                close();
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
