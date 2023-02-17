import React from "react";
import { Link } from "react-router-dom";
import "./ButtonRed.scss";
function ButtonRed({ title, action,size }) {
  return (
    <Link style={{textDecoration:"none", width:size}}to="/login">
      <span className="btnRed">{title}</span>
    </Link>
  );
}

export default ButtonRed;
