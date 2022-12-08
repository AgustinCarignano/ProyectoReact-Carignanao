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
      />
    </div>
  );
}

export default Input;
