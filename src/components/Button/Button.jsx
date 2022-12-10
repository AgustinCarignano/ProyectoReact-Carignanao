import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      disabled={props.disabled && props.disabled}
      className={`btn btn-${props.show}`}
      onClick={props.onClick && (() => props.onClick(props.cant))}
    >
      {props.text}
    </button>
  );
}

export default Button;
