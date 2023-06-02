import React from "react";
import Miniature from "./Miniature";

const POPUP = "popup"
const POPIN_ANIM = "popin-anim"
const POPOUT_ANIM = "popout-anim"

export default function MiniaturesDisplayer({props}) {
  var keyNb = 0;
  let popup;

  function showPopup(data)
  {
    console.log(data)
    popup = document.getElementById(POPUP);
    popup.classList.remove(POPOUT_ANIM);
    popup.classList.add(POPIN_ANIM);
  }

  function hidePopup()
  {
    popup.classList.remove(POPIN_ANIM);
    popup.classList.add(POPOUT_ANIM);
  }
  
  var miniatures = props.map((item) => (
    <Miniature data={item} key={keyNb++} popupCallback={showPopup}></Miniature>
  ));

  return (
    <React.Fragment>
      <div className="miniature-displayer">
      <div id="popup">POPUP
        <button onClick={hidePopup}>X</button>
      </div>
        {miniatures}
      </div>
    </React.Fragment>
  );
}
