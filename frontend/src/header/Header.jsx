import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <article className="container">
        <div className="logo">
          <a href="">Logo</a>
        </div>
        <nav className="menu">
          <a href="">Home</a>
          <a href="">Productos</a>
          <a href="">Agregar Producto</a>
          <a href="">Configuración</a>
        </nav>
      </article>
    </header>
  );
}

export default Header