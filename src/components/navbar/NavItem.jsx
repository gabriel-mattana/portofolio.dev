import React from "react";


function NavItem(props) {

console.log("NavItem " + props.label + " rendered");

  return (
    <td>
      <a className="navitem" href={props.href}>{props.label}</a>
    </td>
  );
}

export default NavItem;
