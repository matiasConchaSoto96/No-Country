import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";
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

  let navigate = useNavigate();

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
        categories: {
          id: editProduct.categories.id,
          name: editProduct.categories.name,
        },
      });
    }
  }, []);

  const handlerEdit = (e) => {
    setProductToEdit({
      ...productToEdit,
      [e.target.name]: e.target.value,
    });
  };

  const handlerCategory = (e) => {
    setProductToEdit({
      ...productToEdit,
      id_category: e.target.id,
      categories: { id: e.target.id, [e.target.name]: e.target.value },
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    editProduct(productToEdit, idToEdit);
    navigate("/products");
  };

  console.log(productToEdit);

  return (
    <div className="edit-page">
      <header>
        <div>LOGO</div>
        <div>Editar Producto</div>
      </header>
      <div>
        <div className="edit-form-container">
          {/* <input name="file" type="file" value={newProduct.name} /> */}
          <input
            name="name"
            type="text"
            value={productToEdit.name}
            onChange={handlerEdit}
          />
          <input
            name="price"
            type="number"
            value={productToEdit.price}
            onChange={handlerEdit}
          />
          <input
            name="stock"
            type="number"
            value={productToEdit.stock}
            onChange={handlerEdit}
          />
          <input
            name="discount"
            type="number"
            value={productToEdit.discount}
            onChange={handlerEdit}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={productToEdit.description}
            onChange={handlerEdit}
          ></textarea>

          <select
            name="categories.name"
            id={productToEdit.categories.id}
            value={productToEdit.categories.name}
            onClick={handlerCategory}
            // onChange={handlerEdit}
          >
            {categories.length > 0
              ? categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.name}
                    id={category.id}
                  >
                    {category.name}
                  </option>
                ))
              : null}
          </select>
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
    </div>
  );
}

export default Edit;
