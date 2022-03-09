import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Context/AppContext";
import "./settingsCategory.css";

export default function SettingsCategory() {
  const { categories, setCategories } = useContext(AppContext);

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
          type="text"
          placeholder="Agregar categoría"
        />
        <input
          className="btn-category"
          name="btn-category"
          type="button"
          value="Enviar"
        />
      </form>
    </div>
  );
}
