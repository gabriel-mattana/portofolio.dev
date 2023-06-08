import React from "react";

export default function InputField({id, type, label, error}) {
  return (
    <React.Fragment>
      <div className="flex spacedAway">
        <label htmlFor={id}>{label}</label>
        <p className="error">{error}</p>
      </div>
      <input id={id} type={type} name={id} />
    </React.Fragment>
  );
}
