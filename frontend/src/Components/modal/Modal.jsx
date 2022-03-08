import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import useForm from '../../Hooks/useForm'
import "./modal.css";

const Modal = () => {
  const { setOpenModal, categories, createProduct } = useContext(AppContext);
  const [form, handleChange] = useForm({ name: "", image: "", price: 0, discount: 0, featured: 0, stock: 0, description: "", id_category: 0});
  const { name, image, price, discount, featured, stock, description, id_category } = form;

  const handlerSubmit = (e) => {
    e.preventDefault()
    createProduct(form)
    
  }

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

            <form className="products-modal-form" method="post" encType="multipart/form-data">

            <div className="products-modal-img-container">
              <label htmlFor="file">Agrega una imagen:</label>
              <br />
              <input
                className="products-modal-file"
                id="file"
                name="image"
                value={image}
                onChange={handleChange}
                type="file"
                required
              />
            </div>

              <div className="form-name-category">
                <input
                  className="form-name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre"
                  required
                />
                <div className="form-featured-product flex-center">
                <select 
                value={id_category} 
                onChange={handleChange} 
                id="category" 
                className="form-control" 
                name="id_category" >
                    <option>Categorias</option>
                    {categories.length > 0
                    ? categories.map((category) => (
                        <option
                          key={category.id}
                          value={category.id}
                          id={category.id}
                        >
                          {category.name}
                        </option>
                      ))
                    : null}
                  </select>
                </div>
                
              </div>
              <div className="form-price-discount">
                <input
                  className="form-price"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  type="number"
                  placeholder="Precio"
                  required
                />
                <input
                  className="form-discount"
                  name="discount"
                  value={discount}
                  onChange={handleChange}
                  type="number"
                  placeholder="Descuento"
                  required
                />
              </div>
              <div className="form-number-products flex-right">
                <label>Cantidad de productos:</label>
                <input
                  className="number-products"
                  name="stock"
                  value={stock}
                  onChange={handleChange}
                  id="number-products"
                  type="number"
                  required
                />
              </div>
              <div className="form-featured-product flex-center">
              <select 
              value={featured} 
              onChange={handleChange} 
              id="featured" 
              className="form-control" 
              name="featured" >
                  <option value="0">Destacar</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
              </div>

              <textarea
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Descripción"
                cols="30"
                rows="8"
                required
              ></textarea>
              <input
                className="products-modal-button"
                type="button"
                value="Enviar"
                onClick={handlerSubmit}
              />
            </form>
          </article>
        </div>
      </section>
    </>
  );
};

export default Modal;
