import React from "react";
import { ScrollToSection } from "../../utils";

export default function NavButton({link, label}) 
{
  // console.log("NavItem " + props.label + " rendered");

  function GoToSection() {
    ScrollToSection(link)
  }

  return (
    <button className="navbutton"  onClick={GoToSection}>
      {label}
    </button>
  );
}

