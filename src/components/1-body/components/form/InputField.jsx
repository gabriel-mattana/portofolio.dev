import React from "react";

export default function InputField({id, type, label, error}) {
  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} name={id} />
      <label className="error">{error}</label>
    </React.Fragment>
  );
}
