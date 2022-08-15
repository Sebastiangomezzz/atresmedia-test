import React from "react";
import style from "./ButtonWithLink.module.css";
import { Link } from "react-router-dom";
export const ButtonWithLink = ({ text, linkTo, onClick }) => {
  return (
    <Link to={linkTo}>
      <button className={style.button} onClick={onClick}>
        {text}
      </button>
    </Link>
  );
};
