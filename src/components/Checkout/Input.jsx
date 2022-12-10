import React from "react";

function Input(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.inputName}>{props.label}</label>
      <input
        name={props.inputName}
        type={props.inputType}
        onChange={props.onChange && props.onChange}
        value={props.value}
        disabled={props.disabled && props.disabled}
      />
    </div>
  );
}

export default Input;
