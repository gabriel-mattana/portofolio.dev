import React, { useEffect, useRef } from "react";
import { FindLocalImg } from "../../../../utils";

export default function Miniature({ data, popupCallback }) {
  let miniature;
  let isSelected;

  useEffect(() => {
    miniature = document.getElementById(data.title);  
  })

  function shrinkMiniature() {
    if(isSelected || !miniature) return;

    miniature.classList.remove("miniature-restore-anim");
    miniature.classList.add("miniature-selected");
  }

  function restoreMiniature() {
    if(isSelected || !miniature) return;

    miniature.classList.remove("miniature-selected");
    miniature.classList.add("miniature-restore-anim")
  }

  function onClick(props)
  {
    // console.log("clicked on " + data.title)
    isSelected = true;
    popupCallback(data);
  }

  return (
    <div
      className="flex miniature-container"
      onMouseEnter={shrinkMiniature}
      onMouseLeave={restoreMiniature}
    >
      <div id={data.title} className="grid miniature w100" onClick={onClick}>
        <img src={FindLocalImg(data.imgurl)} />
        <div className="grid center-children miniature-title">
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
}
