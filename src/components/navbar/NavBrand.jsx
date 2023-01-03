import React from "react";

function NavBrand({ title }) {
  console.log("Navbrand rendered");

  return (
    <td className="navbrand">{title}</td>
  );
}

export default React.memo(NavBrand);
