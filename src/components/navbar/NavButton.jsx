import React from "react";
import {MainContainerInstance} from "../content/MainContainer";


export default function NavButton(props) 
{
  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    MainContainerInstance.UpdateContent(props.link);
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

