import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";

export const RegisterComponent = () => {
  const { newUser, setNewUser, setRegister } = useContext(AppContext);
  const [form, handleChange] = useForm({
    email: "",
    password: "",
    name: "",
  });
  const { name, email, password } = form;

  const addUser = () => {
    fetch("http://localhost:3001/user/register", {
      method: "POST",
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  const handleSubmit = (e) => {
    e.preventDefault(form);
    addUser();
  };

  const handlerForm = () => {
    setRegister(false);
  };

  return (
    <div className="login-page_box">
      <div className="login-page_form">
        <form onSubmit={handleSubmit}>
          <p>
            <label htmlFor="Nombre">Nombre</label>
            <input
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Nombre"
            ></input>
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            ></input>
          </p>
          <p>
            <label htmlFor="contraseña">Contraseña</label>
            <input
              id="contraseña"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Contraseña"
            ></input>
          </p>
          <p>
            <button type="submit">Registrarse</button>
          </p>
          <p>
            <span>
              Ya tienes una cuenta?{" "}
              <span className="linkto" onClick={handlerForm}>
                Inicia sesión
              </span>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
