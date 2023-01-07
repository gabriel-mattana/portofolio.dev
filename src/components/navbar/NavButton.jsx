import React from "react";


function NavButton(props) {

console.log("NavItem " + props.label + " rendered");

  return (
      <button className="navbutton" href={props.href}>{props.label}</button>
  );
}

export default NavButton;
