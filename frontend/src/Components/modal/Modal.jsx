import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import "./modal.css";

const Modal = () => {
  const {
    setOpenModal,
    newProduct,
    setNewProduct,
    edit,
    setEdit,
    productToEdit,
    setProductToEdit,
    products,
  } = useContext(AppContext);

  useEffect(() => {
    if (productToEdit) {
      let editProduct = products.find((product) => {
        return product.id === productToEdit;
      });

      setNewProduct({
        id: editProduct.id,
        name: editProduct.name,
        price: editProduct.price,
        description: editProduct.description,
        stock: editProduct.stock,
        featured: editProduct.featured,
        discount: editProduct.discount,
        id_category: editProduct.id_category,
        categories: {
          id: editProduct.categories.id,
          name: editProduct.categories.name,
        },
      });
    }
  }, [edit, productToEdit]);

  const handlerForm = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSend = () => {
    setNewProduct({
      id: "",
      name: "",
      price: "",
      description: "",
      stock: "",
      featured: "",
      discount: "",
      id_category: "",
      categories: {
        id: "",
        name: "",
      },
    });
    setOpenModal(false);
  };

  return (
    <>
      <section className="products-modal">
        <div className="products-modal-content">
          <div className="btn-modal-close-container">
            <button
              className="btn-modal-close"
              onClick={() => setOpenModal(false)}
            >
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
                  value={newProduct.name}
                  onChange={handlerForm}
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
                  name="price"
                  value={newProduct.price}
                  onChange={handlerForm}
                  type="number"
                  placeholder="Precio"
                  required
                />
                <input
                  className="form-discount"
                  name="discount"
                  value={newProduct.discount}
                  onChange={handlerForm}
                  type="number"
                  placeholder="Descuento"
                  required
                />
              </div>
              <div className="form-number-products flex-right">
                <label htmlFor="number-products">Cantidad de productos:</label>
                <input
                  className="number-products"
                  name="stock"
                  value={newProduct.stock}
                  onChange={handlerForm}
                  id="number-products"
                  type="number"
                  required
                />
              </div>
              <div className="form-featured-product flex-center">
                <input
                  id="featured-product"
                  type="number"
                  value={newProduct.featured}
                  onChange={handlerForm}
                  required
                />
                <label htmlFor="featured-product">Producto destacado</label>
              </div>
              <textarea
                name="description"
                value={newProduct.description}
                onChange={handlerForm}
                placeholder="Descripción"
                cols="30"
                rows="8"
                required
              ></textarea>
              <input
                className="products-modal-button"
                type="button"
                value="Enviar"
                onClick={handlerSend}
              />
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Modal;
