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
    lastname: "",
    passwordConfirm: "",
  });
  const { name, lastname, email, password } = form;

  const handleSubmit = (e) => {
    e.preventDefault(form);
    setNewUser(form);
    console.log(newUser);
    addUser();
  };

  const addUser = () => {
    fetch("http://localhost:3001/user", {
      method: "POST",
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        pass: newUser.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
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
            <label htmlFor="Apellido">Apellido</label>
            <input
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              placeholder="Apellido"
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
            <label htmlFor="contraseñaConf">Confirmar contraseña</label>
            <input
              id="contraseñaConf"
              name="passwordConfirm"
              /*value={passwordConfirm}*/
              onChange={handleChange}
              placeholder="Confirmar contraseña"
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
