import React from "react";
import style from "./Button.module.css";

export const Button = ({ text, onClick, width, color='green' }) => {
    return (
      <button
        style={{ width: width ? width : "", backgroundColor: color ? color : "" }}
        className={style.button}
        onClick={onClick}
      >
        {text}
      </button>
    );
};
