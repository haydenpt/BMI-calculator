import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="number"
        placeholder={props.placeholder}
        required
        onChange={props.onChange}
      />
    </div>
  );
};

export default TextInput;
