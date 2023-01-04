import React from "react";


function NavItem(props) {

console.log("NavItem " + props.label + " rendered");

  return (
      <button className="navitem" href={props.href}>{props.label}</button>
  );
}

export default NavItem;
