import React from "react";
import style from "./ButtonWithLink.module.css";
import { Link } from "react-router-dom";
export const ButtonWithLink = ({ text, linkTo, onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      <Link
        to={linkTo}
      >
        {text}
      </Link>
    </button>
  );
};
