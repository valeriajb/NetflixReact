import React from "react";
import { Link } from "react-router-dom";
import "./ButtonRed.scss";
function ButtonRed({ title }) {
  return (

    <button className="btnRed" >
      <Link style={{ textDecoration: "none", color: "white" }} to="/login">
        {title}
      </Link>
    </button>

  );
}

export default ButtonRed;
