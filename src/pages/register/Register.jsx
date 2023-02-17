import React from "react";
import ButtonRed from '../../components/buttonRed/ButtonRed';
import "./Register.scss";
function Register() {
  return (
    <div className="containerRegister">
      <nav className="nav-register">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
        <ButtonRed title="Ingresar" />
      </nav>
      <div className="container-register">
        <h1>Películas y series ilimitadas y mucho más</h1>
        <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
        <h3>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</h3>
        <div className="container-form-register">
          <input placeholder="Escriba su correo" type="email"></input>
          <ButtonRed title="Ingresar" width="50px" />

        </div>
      
      </div>




    </div>
  );
}

export default Register;
