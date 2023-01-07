import React from "react";
import {ContentDisplayerInstance as PageDisplayerInstance} from "../content/PageDisplayer";


export default function NavButton(props) 
{
  function UpdateContent() {
    
    console.log("Clicked on " + props.label);
    PageDisplayerInstance.UpdateContent(props.link);
  }

  console.log("NavItem " + props.label + " rendered");

  return (
    <button className="navbutton" onClick={UpdateContent}>
      {props.label}
    </button>
  );
}

