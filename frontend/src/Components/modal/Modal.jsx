import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

import "./modal.css";

const Modal = () => {
  const { setOpenModal } = useContext(AppContext);

  const handlerClosedModal = () => {
    setOpenModal(false);
  };
  return (
    <>
      <section className="products-modal">
        <div className="products-modal-content">
          <div className="btn-modal-close-container">
            <button className="btn-modal-close" onClick={handlerClosedModal}>
              <span>x</span>
            </button>
          </div>
          <article className="products-modal-article">
            <div className="products-modal-img-container">
              <label htmlFor="file">Agrega una imagen:</label>
              <br />
              <input
                className="products-modal-file"
                id="file"
                name="file"
                type="file"
                required
              />
            </div>
            <form className="products-modal-form" method="post">
              <div className="form-name-category">
                <input
                  className="form-name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  required
                />
                <select className="category-select" name="category-select">
                  <option selected>Elija una opción</option>
                  <option className="new-category">
                    Agregar nueva categoría
                  </option>
                </select>
                <input
                  className="category-input none"
                  name="category-input"
                  type="text"
                  placeholder="Categoría"
                />
              </div>
              <div className="form-price-discount">
                <input
                  className="form-price"
                  type="number"
                  placeholder="Precio"
                  required
                />
                <input
                  className="form-discount"
                  type="number"
                  placeholder="Descuento"
                  required
                />
              </div>
              <div className="form-number-products flex-right">
                <label htmlFor="number-products">Cantidad de productos:</label>
                <input
                  className="number-products"
                  id="number-products"
                  type="number"
                  required
                />
              </div>
              <div className="form-featured-product flex-center">
                <input
                  id="featured-product"
                  type="checkbox"
                  value={true}
                  required
                />
                <label htmlFor="featured-product">Producto destacado</label>
              </div>
              <textarea
                name="products-modal-textarea"
                placeholder="Descripción"
                cols="30"
                rows="8"
                required
              ></textarea>
              <input
                className="products-modal-button"
                type="button"
                value="Enviar"
              />
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Modal;
