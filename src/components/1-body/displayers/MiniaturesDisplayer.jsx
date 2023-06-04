import React, { useRef } from "react";
import Miniature from "./Miniature";

const FADEIN = "fadeout 0.3s forwards"

export default function MiniaturesDisplayer({data, sectionid}) {
  var keyNb = 0;
  let displayerid = "displayer" + sectionid;
  let popup;
 
  var miniatures = data.map((item) => (
    <Miniature data={item} key={keyNb++} popupCallback={displayInfoOnProduct}></Miniature>
  ));

  function displayInfoOnProduct(miniatureSelected)
  {
    var displayer = document.getElementById(displayerid)
    var children = displayer.childNodes
    
    for (let i = 0; i < children.length; i++) {
      if(data[i].title != miniatureSelected.title)
      {
        children[i].classList.add("fadeout")
      }
      else
      {
        // children[i].classList.remove()
      }
    }
  }

  return (
    <React.Fragment>
      <div id={displayerid} className="miniature-displayer">
      {/* <div id="popup">POPUP
        <button onClick={hidePopup}>X</button>
      </div> */}
        {miniatures}
      </div>
    </React.Fragment>
  );
}
