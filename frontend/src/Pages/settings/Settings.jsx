import React, { useState } from "react";
import Header from "../../Components/header/Header";
import HeaderMobile from "../../Components/header/HeaderMobile";
import SettingsCategory from "../../Components/settingsCategory/SettingsCategory";
import UserDisplay from "../../Components/settingsUser/UserDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./settings.css";

export default function Settings() {
  const [active, setActive] = useState(false);
  const [showUserDisplay, setShowUserDisplay] = useState(true);

  return (
    <>
      <Header />
      <main className="main-settings">
        <nav className={`nav-settings ${active && "is-active"}`}>
          <button className="btn-nav-close" onClick={() => setActive(false)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          <div className="nav-container">
            <div className="nav-btn">
              <button
                className="conf-usuarios"
                onClick={() => {
                  setShowUserDisplay(true);
                  setActive(false);
                }}
              >
                Usuarios
              </button>
              <button
                className="conf-categorias"
                onClick={() => {
                  setShowUserDisplay(false);
                  setActive(false);
                }}
              >
                Categorías
              </button>
            </div>
          </div>
        </nav>
        <section className="user-settings">
          {showUserDisplay ? (
            <article className="user-settings-container">
              <button
                className="user-btn-nav btn-nav-flex"
                onClick={() => setActive(true)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
              <UserDisplay />
            </article>
          ) : (
            <article className="category-settings-container">
              <button
                className="category-btn-nav btn-nav-flex"
                onClick={() => setActive(true)}
              >
                <FontAwesomeIcon icon={faAngleRight} />
              </button>
              <SettingsCategory />
            </article>
          )}
        </section>
      </main>

      <HeaderMobile />
    </>
  );
}
