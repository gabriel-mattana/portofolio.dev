import React from "react";

const navbarOffset = 150;
export default function NavButton(props) 
{
  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    var height = document.getElementById(props.link).offsetTop
    window.scrollTo({top: height - navbarOffset,behavior:"smooth"});
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

