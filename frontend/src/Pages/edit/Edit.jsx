import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/header/Header";
import HeaderMobile from "../../Components/header/HeaderMobile";
import "./edit.css";

function Edit() {
  const {
    productToEdit,
    setProductToEdit,
    products,
    idToEdit,
    categories,
    editProduct,
  } = useContext(AppContext);
  const [file, setFile] = useState()
  const [images, setImages] = useState([])
  const [imageUrls, setImageUrls] = useState([])

  let navigate = useNavigate();

  const handleChangeImage = (e) => {
    e.preventDefault()
    setFile(e.target.files[0])
    setImages([...e.target.files])
  }
  
  useEffect(()=>{
    if(images.length < 1) return;
    const newImageUrls = []
    images.forEach(image => newImageUrls.push(URL.createObjectURL(image)))
    setImageUrls(newImageUrls)
  }, [images])

  useEffect(() => {
    if (idToEdit) {
      let editProduct = products.find((product) => {
        return product.id === idToEdit;
      });

      setProductToEdit({
        id: editProduct.id,
        name: editProduct.name,
        price: editProduct.price,
        description: editProduct.description,
        stock: editProduct.stock,
        featured: editProduct.featured,
        discount: editProduct.discount,
        id_category: editProduct.id_category,
        images: editProduct.images
      });
    }
  }, []);

  const handlerEdit = (e) => {
    setProductToEdit({
      ...productToEdit,
      [e.target.name]: e.target.value,
    });

  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    editProduct(productToEdit, file);
    navigate("/products");
  };

  return (
    <div className="edit-page">
      <Header />
      <div>
        <h2>Editar Producto</h2>
        <div className="edit-form-container">
          {images.length < 1 ?
           <img src={`images/${productToEdit.images.image}`}></img>
          : 
          imageUrls.map(imageSrc => <img src={imageSrc} />)
          }
          <input
                className="products-modal-file"
                id="file"
                name="image"
                onChange={handleChangeImage}
                type="file"
                required
              />
          <label>
            Nombre
            <input
              name="name"
              type="text"
              value={productToEdit.name}
              onChange={handlerEdit}
            />
          </label>
          <label>
            Precio{" "}
            <input
              name="price"
              type="number"
              value={productToEdit.price}
              onChange={handlerEdit}
            />
          </label>
          <label>
            Stock{" "}
            <input
              name="stock"
              type="number"
              value={productToEdit.stock}
              onChange={handlerEdit}
            />{" "}
          </label>
          <label>
            Descuento
            <input
              name="discount"
              type="number"
              value={productToEdit.discount}
              onChange={handlerEdit}
            />
          </label>
          <label>
            {" "}
            Categoria{" "}
            <select
              value={productToEdit.id_category}
              onChange={handlerEdit}
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
            </select>{" "}
          </label>
          <label className="edit-form-description">
            Descripcion
            <textarea
              name="description"
              cols="33"
              rows="8"
              value={productToEdit.description}
              onChange={handlerEdit}
            ></textarea>
          </label>

          <div className="edit-form-buttons-container">
            <button
              className="edit-form-button"
              onClick={() => navigate("/products")}
            >
              Cancelar
            </button>
            <button className="edit-form-button" onClick={handlerSubmit}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
      <HeaderMobile />
    </div>
  );
}

export default Edit;
