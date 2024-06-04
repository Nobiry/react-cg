import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, ...props }, ref) {
  return (
    <div className="input">
      {label && <label>{label}</label>}
      <input ref={ref} className="bg-stone-400" type="text" {...props} />
    </div>
  );
})

export default Input;
