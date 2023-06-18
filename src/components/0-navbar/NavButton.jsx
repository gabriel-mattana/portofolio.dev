import React from "react";
import { ScrollToSection } from "../../utils";

export default function NavButton({link, label}) 
{
  // console.log("NavItem " + props.label + " rendered");

  function GoToSection() {
    ScrollToSection(link)
  }

  return (
    <button className="navbutton fontmedia"  onClick={GoToSection}>
     <h3>{label}</h3> 
    </button>
  );
}

