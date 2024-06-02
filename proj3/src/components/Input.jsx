import { useState } from "react";

function Input({ label, value, onChange, id, ...props }) {
  function handleChange(e) {
    onChange(e.target.value, id);
  }
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input onChange={handleChange} id={label} value={value} {...props} />
    </div>
  );
}

export default Input;
