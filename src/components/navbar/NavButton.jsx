import React from "react";
import {ContentDisplayerInstance} from "../content/ContentDisplayer";


export default function NavButton(props) 
{

  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    var displayer = ContentDisplayerInstance;
    console.log(displayer);
    displayer.UpdateContent(props.link);
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

