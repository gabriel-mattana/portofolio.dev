import React from "react";
import { ScrollTo } from "../../utils";

export default function NavButton(props) 
{
  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    ScrollTo(props.link)
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

