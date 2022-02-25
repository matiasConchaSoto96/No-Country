import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";

export const RegisterComponent = () => {
  const { newUser, setNewUser, setRegister, errors, setErrors } = useContext(AppContext);
  const [form, handleChange] = useForm({ email: "", password: "", name: "", lastname: "", rol: 1 });
  const { name, lastname, email, password } = form;

  const [errorPass2, setErrorPass2] = useState();
  const pass1 = useRef()

  const handleChangeComparePass = (e) => {
    setErrorPass2(
      pass1.current?.value !== e.target.value
        ? "Las contraseñas no coinciden"
        : ''
    )
  }

  const addUser = () => {
    fetch("http://localhost:3001/user/register", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setErrors(json.errors)
      })
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
            <div className="text-danger">{errors && errors["name"]?.msg}</div>
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
            <div className="text-danger">{errors && errors["email"]?.msg}</div>
          </p>
          <p>
            <label htmlFor="contraseña">Contraseña</label>
            <input
              id="contraseña"
              name="password"
              ref={pass1}
              value={password}
              onChange={handleChange}
              placeholder="Contraseña"
            ></input>
            <div className="text-danger">{errors && errors["password"]?.msg}</div>
          </p>
          <p>
            <label htmlFor="contraseñaConf">Confirmar contraseña</label>
            <input
              id="contraseñaConf"
              name="passwordConfirm"
              onChange={handleChangeComparePass}
              placeholder="Confirmar contraseña"
            ></input>
            <div className="text-danger">{errorPass2}</div>
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
