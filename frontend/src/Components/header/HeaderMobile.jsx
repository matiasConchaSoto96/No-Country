import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./headerMobile.css";
// import burger from "../../resources/burger.svg";
// import x from "../../resources/x.svg";

const HeaderMobile = () => {
  const { user, setUser, open, setOpen, setOpenModal } = useContext(AppContext);
  let navigate = useNavigate();

  const handlerOpen = () => {
    setOpen(!open);
  };

  const handlerAdd = () => {
    setOpenModal(true);
  };

  const handlerLoginOut = () => {
    setUser({ ...user, logged: false });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="header-mobile">
      <article className="header-mobile-container">
        <button className="menu-btn-mobile" onClick={handlerOpen}>
          {open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
        </button>
        <div className="logo-mobile">
          <Link to="/">Logo</Link>
        </div>
        <button className="menu-btn-mobile" onClick={handlerAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {open && (
          <nav className="menu-mobile">
            <Link to="/" onClick={handlerOpen}>
              Home
            </Link>
            <Link to="/products" onClick={handlerOpen}>
              Productos
            </Link>
            <Link to="/settings">Configuración</Link>
            <a href="#" onClick={handlerLoginOut}>
              Cerrar Sesión
            </a>
          </nav>
        )}
      </article>
    </header>
  );
};

export default HeaderMobile;
