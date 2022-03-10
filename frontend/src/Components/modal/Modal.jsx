import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";
import "./modal.css";

const Modal = () => {
  const { products, setOpenModal, categories, setCategories, createProduct } =
    useContext(AppContext);
  const [form, handleChange] = useForm({
    name: "",
    price: 0,
    discount: 0,
    featured: 0,
    stock: 0,
    description: "",
    id_category: 0,
    id_image: 0,
  });
  const {
    name,
    price,
    discount,
    featured,
    stock,
    description,
    id_category,
    id_image,
  } = form;
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api/categorias`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  }, []);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
  }, [images]);

  const handleChangeImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    setImages([...e.target.files]);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    let imageRequest = `http://localhost:3001/api/images`;

    const formData = new FormData();
    formData.append("image", file);

    axios
      .post(`${imageRequest}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        const newData = { ...form, id_image: response.data.data.id };
        createProduct(newData);
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
            <form
              className="products-modal-form"
              method="post"
              encType="multipart/form-data"
            >
              <div className="products-modal-img-container">
                  {imageUrls.map((imageSrc) => (
                    <img src={imageSrc} />
                  ))}
                <label htmlFor="file">Agrega una imagen:</label>
                <br />
                <input
                  className="products-modal-file"
                  id="file"
                  name="image"
                  onChange={handleChangeImage}
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

                <select
                  value={featured}
                  onChange={handleChange}
                  id="featured"
                  className="form-control"
                  name="featured"
                >
                  <option value="0">Destacar</option>
                  <option value="1">Si</option>
                  <option value="0">No</option>
                </select>
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

              <div className="form-category-product flex-center">
                <select
                  value={id_category}
                  onChange={handleChange}
                  id="category"
                  className="form-control"
                  name="id_category"
                >
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
              <div className="form-number-products flex-right">
                <label htmlFor="number-products">Cantidad de productos:</label>
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
