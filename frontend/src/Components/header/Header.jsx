import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const { user, setUser, setOpenModal } = useContext(AppContext);
  let navigate = useNavigate();

  const handlerAdd = () => {
    setOpenModal(true);
  };

  const handlerLoginOut = () => {
    setUser({ ...user, logged: false });
    localStorage.removeItem('user')
    navigate("/login");
  };
  return (
    <header className="header">
      <article className="container">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <nav className="menu">
          <Link to="/">Home</Link>
          <Link to="/products">Productos</Link>
          <a href="#" onClick={handlerAdd}>
            Agregar Producto
          </a>
          <a href="#">Configuración</a>
          <a href="#" onClick={handlerLoginOut}>
            Cerrar Sesión
          </a>
        </nav>
      </article>
    </header>
  );
}

export default Header;
