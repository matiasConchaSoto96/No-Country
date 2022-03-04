import React, { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import useForm from "../../Hooks/useForm";
import logo from "../../resources/ag.png";

export const LoginComponent = () => {
  const { user, setUser, setRegister, errors, setErrors } =
    useContext(AppContext);
  const [form, handleChange] = useForm({ email: "", password: "" });
  const { email, password } = form;
  const [check, setCheck] = useState(false);

  const handleChangeCheck = (e) => {
    if (e.target.checked) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  };

  function loginUser() {
    fetch("http://localhost:3001/user/login", {
      body: JSON.stringify(form),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setErrors(json.errors);
        if (check) {
          localStorage.setItem("user", JSON.stringify(json.data));
        }
        if (json.meta.ok) {
          setUser({ ...user, logged: true });
        }
      });
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
        <div className="login-page_img">
          <img src={logo}></img>
        </div>
        <form onSubmit={handleSubmit}>
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
              value={password}
              onChange={handleChange}
              placeholder="Contraseña"
            ></input>
            <div className="text-danger">
              {errors && errors["password"]?.msg}
            </div>
          </p>
          <div className="check">
            <input
              type="checkbox"
              id="check"
              onChange={handleChangeCheck}
            ></input>
            <label forHtml="check">Mantener la sesión abierta</label>
          </div>
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
