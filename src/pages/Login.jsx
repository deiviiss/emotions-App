import React, { useRef } from "react";
import "@styles/Login.scss";
import "@styles/Button.scss";

import logo from "@logos/logo_yard_sale.svg";

import axios from "axios";
const API = "https://app-emotions-1.herokuapp.com/api/v1/auth/login";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    axios
      .post(API, {
        data,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="Login">
      <div className="Login-container">
        <img src={logo} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Correo electrónico
          </label>
          <input
            type="text"
            name="email"
            placeholder="correo@ejemplo.com"
            className="input input-email"
          />
          <label htmlFor="password" className="label">
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            placeholder="*********"
            className="input input-password"
          />
          <button onClick={handleSubmit} className="button login-button">
            Iniciar sesión
          </button>
          <a href="/">Olvide mi contraseña</a>
        </form>

        <button className="button secondary-button signup-button">
          Crear cuenta
        </button>
      </div>
    </div>
  );
};

export default Login;
