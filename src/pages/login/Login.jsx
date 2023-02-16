import React from "react";
import {Link} from 'react-router-dom';
import "./Login.scss";
function Login() {
  return (
    <div className="container-register">
      <div className="container-top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
      </div>

      <div className="container-form">
        <form>
          <h1>Entrar</h1>
          <div className="container-inputs">
            <input type="email" placeholder="Escriba su Correo..."></input>
            <input
              type="password"
              placeholder="Escriba su Contraseña..."
            ></input>
            <button>Ingresar</button>
          </div>
          <div className="container-cookies">
            <p>Nuevo en Netflix <Link to="/register"><span>¡Regístrese Ahora!</span></Link></p>
            <p>Esta página esta protegida...</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
