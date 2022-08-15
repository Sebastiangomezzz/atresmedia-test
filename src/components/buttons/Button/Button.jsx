import React from "react";
import style from "./Button.module.css";

export const Button = ({ text, onClick, type }) => {
    return (
      <button className={style.button} onClick={onClick}>
        {text}
      </button>
  );
};
