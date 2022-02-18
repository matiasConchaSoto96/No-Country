import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <article className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/products">Productos</Link>
          <a href="">Agregar Producto</a>
          <a href="">Configuración</a>
        </nav>
      </article>
    </header>
  );
}

export default Header;
