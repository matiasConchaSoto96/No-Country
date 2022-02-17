import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import "./headerMobile.css";

const HeaderMobile = () => {
  const { open, setOpen } = useContext(AppContext);

  const handlerOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="header-mobile">
      <article className="header-mobile-container">
        <button className="menu-btn-mobile" onClick={handlerOpen}>
          {open ? "X" : "="}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
          <svg
            className="none"
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192
          17.656 17.606 16.242 13.364 12 17.606 7.758z"
            />
          </svg> */}
        </button>
        <div className="logo-mobile">
          <Link to="/">Logo</Link>
        </div>
        <button className="menu-btn-mobile">+</button>
        {open && (
          <nav className="menu-mobile">
            <Link to="/" onClick={handlerOpen}>
              Home
            </Link>
            <Link to="/products" onClick={handlerOpen}>
              Productos
            </Link>
            <a href="">Agregar Producto</a>
            <a href="">Configuración</a>
          </nav>
        )}
      </article>
    </header>
  );
};

export default HeaderMobile;
