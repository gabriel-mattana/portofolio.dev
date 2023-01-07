import React from "react";
import {ContentDisplayerInstance} from "../content/ContentDisplayer";

function NavButton(props) 
{

  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    var displayer = ContentDisplayerInstance;
    console.log(displayer);
    displayer.UpdateContent("hahaha");
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

export default NavButton;
