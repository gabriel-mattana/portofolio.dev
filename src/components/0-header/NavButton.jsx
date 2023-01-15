import React from "react";
import {Body_Instance} from "../1-body/BodyContainer";

export default function NavButton(props) 
{
  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    
    Body_Instance.UpdateContent(props.link);
    document.documentElement.scrollTop = 0;
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

