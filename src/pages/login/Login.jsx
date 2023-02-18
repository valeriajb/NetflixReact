import React, { useContext, useEffect, useRef, useState } from "react";
import { LoginContext } from '../../context/contextLogin';
import ButtonRed from '../../components/buttonRed/ButtonRed';
import { Link } from 'react-router-dom';
import "./Login.scss";
function Login() {
  const { isPermission, setIsPermission } = useContext(LoginContext)

  const [nameUser, setNameUser] = useState("")

  const inputName = useRef()
  const inputPassword = useRef()

  const handledName = () => {
    setNameUser(inputName.current.value);
    console.log(nameUser)
  }
  const sendData = () => {
    if (nameUser==="") {
      alert("Escriba su Nombre")
    } else {
      setIsPermission(true)
    }
  }
  useEffect(() => {
    localStorage.setItem("nameUser", nameUser)
  }, [nameUser])

  useEffect(() => {
    setIsPermission(false)
  }, [])

  return (
    <div className="container-login">
      <div className="container-top">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" />
      </div>

      <div className="container-form">
        <form>
          <h1>Entrar</h1>
          <input type="text"
            onChange={handledName}
            ref={inputName}
            placeholder="Escriba su Nombre...">

          </input>
          <input
            ref={inputPassword}
            type="password"
            placeholder="Escriba su Contraseña..."
          ></input>
          {/* <ButtonRed title="Entrar" action={sendData}/> */}
          <Link style={{ textDecoration: "none"}} to="/"><span
            className="spanSend"
            onClick={() => {
              sendData()
            }}>Enviar</span></Link>
          <p>¿Primera vez en Netflix? <Link  style={{ textDecoration: "none" }} to="/register" ><span>Suscríbete ahora.</span></Link></p>
          <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. Más info.</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
