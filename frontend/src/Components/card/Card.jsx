import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
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
          <EditProduct id={id} />
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

function EditProduct({ id }) {
  const { edit, setEdit, setOpenModal, newProduct, setNewProduct, products } =
    useContext(AppContext);

  useEffect(() => {
    if (edit) {
      const editProduct = products.find((product) => {
        return product.id === id;
      });

      setNewProduct({
        id: editProduct.id,
        name: editProduct.name,
        price: editProduct.price,
        description: editProduct.description,
        stock: editProduct.stock,
        discount: editProduct.discount,
        id_category: editProduct.id_category,
        categories: {
          id: editProduct.categories.id,
          name: editProduct.categories.name,
        },
      });

      setOpenModal(true);
    }
  }, [edit]);
  console.log(newProduct);
  return (
    <>
      <button className="card-buttons-edit" onClick={() => setEdit(true)}>
        E
      </button>
    </>
  );
}

function PopupDelete({ id }) {
  const { deleteProduct } = useContext(AppContext);

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
