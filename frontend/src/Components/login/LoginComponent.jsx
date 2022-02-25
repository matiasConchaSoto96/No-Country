import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";

export const LoginComponent = () => {
  const { user, setUser, setRegister, errors, setErrors } = useContext(AppContext);
  const [form, handleChange] = useForm({ email: "", password: "" });
  const { email, password } = form;
  const [users, setUsers] = useState([]);

  function loginUser () {
    fetch("http://localhost:3001/user/login", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      setErrors(json.errors)
      if(json.meta.ok){
        setUser({ ...user, logged: true });
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(form);

    loginUser(form);
  };

  const handlerForm = () => {
    setRegister(true);
  };

  return (
    <div className="login-page_box">
      <div className="login-page_form">
        <form onSubmit={handleSubmit}>
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
              value={password}
              onChange={handleChange}
              placeholder="Contraseña"
            ></input>
            <div className="text-danger">{errors && errors["password"]?.msg}</div>
          </p>
          <p>
            <button type="submit">Iniciar sesión</button>
          </p>
          <p>
            <span>
              Nuevo en AdminGamer?{" "}
              <span className="linkto" onClick={handlerForm}>
                crea una cuenta
              </span>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
