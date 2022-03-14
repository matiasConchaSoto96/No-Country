import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";
import logo from "../../resources/ag.png";

export const RegisterComponent = () => {
  const { setRegister, errors, setErrors } = useContext(AppContext);
  const [form, handleChange] = useForm({
    email: "",
    password: "",
    name: "",
    lastname: "",
    rol: 1,
  });
  const { name, lastname, email, password } = form;

  const [errorPass2, setErrorPass2] = useState();
  const pass1 = useRef();

  const handleChangeComparePass = (e) => {
    setErrorPass2(
      pass1.current?.value !== e.target.value
        ? "Las contraseñas no coinciden"
        : ""
    );
  };

  const addUser = () => {
    fetch("http://localhost:3001/user/register", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setErrors(json.errors);
      });

    setRegister(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  const handlerForm = () => {
    setRegister(false);
  };

  return (
    <div className="login-page_box">
      <div className="login-page_form">
        <div className="login-page_img">
          <img src={logo}></img>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="login-page_names">
            <p>
              <input
                id="name"
                name="name"
                value={name}
                onChange={handleChange}
                placeholder="Nombre"
              ></input>
              <div className="text-danger">{errors && errors["name"]?.msg}</div>
            </p>
            <p>
              <input
                id="lastname"
                name="lastname"
                value={lastname}
                onChange={handleChange}
                placeholder="Apellido"
              ></input>
            </p>
          </div>
          <p>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
            ></input>
            <div className="text-danger">{errors && errors["email"]?.msg}</div>
          </p>
          <p>
            <input
              id="contraseña"
              name="password"
              ref={pass1}
              value={password}
              onChange={handleChange}
              placeholder="Contraseña"
              type="password"
            ></input>
            <div className="text-danger">
              {errors && errors["password"]?.msg}
            </div>
          </p>
          <p>
            <input
              id="contraseñaConf"
              name="passwordConfirm"
              onChange={handleChangeComparePass}
              placeholder="Confirmar contraseña"
              type="password"
            ></input>
            <div className="text-danger">{errorPass2}</div>
          </p>
          <p>
            <button type="submit">Registrarse</button>
          </p>
          <p>
            <span className="span-tienes-cuenta">
              <span>¿Ya tienes una cuenta?</span>
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
