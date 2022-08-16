import React from "react";
import style from "./ButtonWithLink.module.css";
import { Link } from "react-router-dom";
export const ButtonWithLink = ({ text, linkTo, onClick, width, color='green' }) => {
  return (
    <Link to={linkTo} style={{ width: width ? width : "" }}>
      <button
        style={{ width: width ? width : "", backgroundColor: color ? color : "" }}
        className={style.button}
        onClick={onClick}
      >
        {text}
      </button>
    </Link>
  );
};
