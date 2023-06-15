import React from "react";
import { ScrollToSection } from "../../utils";

export default function NavButton(props) 
{
  // console.log("NavItem " + props.label + " rendered");

  function GoToSection() {
    ScrollToSection(props.link)
  }

  return (
    <button className="navbutton" onClick={GoToSection}>
      {props.label}
    </button>
  );
}

