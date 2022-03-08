import React from 'react';
import "./settingsCategory.css";

export default function SettingsCategory() {
  // const categorias = [
  //   { name: "Videojuegos" },
  //   { name: "consola" },
  //   { name: "PS5" },
  //   { name: "Controles" },
  //   { name: "Auriculares" }
  // ];

  const categorias = {
    name: ["Videojuegos", "Consola", "PS5", "Controles", "Auriculares"]
  };

  return(
    <div className="settings-category">
      <div className="categories-container">
        {categorias.name.map((category) => (
          <p>{category}</p>
        ))}
      </div>
      <form className="settings-category-form">
        <input className="new-category" name="new-category" type="text" placeholder="Agregar categoría" />
        <input className="btn-category" name="btn-category" type="button" value="Enviar" />      
      </form>
    </div>
  );
}