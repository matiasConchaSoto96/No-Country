import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "./settingsCategory.css";

export default function SettingsCategory() {
  const { categories, setCategories, createNewCategory } =
    useContext(AppContext);
  const [newCategory, setNewCategory] = useState({ name: "" });

  useEffect(() => {
    let endpointRequest = `http://localhost:3001/api/categorias`;
    fetch(endpointRequest)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCategories(data.data);
      });
  }, [categories]);

  const handlerNewCategory = (e) => {
    setNewCategory({ name: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    createNewCategory(newCategory);
    setNewCategory({ name: "" });
  };

  return (
    <div className="settings-category">
      <div className="categories-container">
        {categories.length > 0 ? (
          categories.map((category) => <p key={category.id}>{category.name}</p>)
        ) : (
          <span>Cargando...</span>
        )}
      </div>
      <form className="settings-category-form">
        <input
          className="new-category"
          name="new-category"
          value={newCategory.name}
          onChange={handlerNewCategory}
          type="text"
          placeholder="Agregar categoría"
        />
        <input
          className="btn-category"
          name="btn-category"
          type="button"
          value="Enviar"
          onClick={handlerSubmit}
        />
      </form>
    </div>
  );
}
