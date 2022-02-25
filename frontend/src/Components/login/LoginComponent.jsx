import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";

export const LoginComponent = () => {
  const { user, setUser, setRegister } = useContext(AppContext);
  const [form, handleChange] = useForm({ email: "", password: "" });
  const { email, password } = form;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (users.length) {
      users.forEach((u) => {
        if (u.email === user.email && u.password === user.password) {
          setUser({ ...user, logged: true });
        }
      });
    }
  }, [users, user]);

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:3001/user");
      const data = await res.json();
      const set = await setUsers(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(form);
    setUser(form);
    getData();
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
