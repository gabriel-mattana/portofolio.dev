import React from "react";

function NavButton(props) 
{

  function UpdateContent() {
    console.log("Clicked on " + props.label);
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

export default NavButton;
