import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button
      className={`btn btn-${props.show}`}
      onClick={props.onClick && (() => props.onClick(props.cant))}
    >
      {props.text}
    </button>
  );
}

export default Button;
