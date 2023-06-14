import React from "react";
import { ScrollToSection } from "../../utils";

export default function NavButton(props) 
{
  console.log("NavItem " + props.label + " rendered");

  function UpdateContent() {
    
    // console.log("Clicked on " + props.label);
    ScrollToSection(props.link)
  }

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

