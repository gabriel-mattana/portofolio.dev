import React, { useRef } from "react";

export default function Miniature({ data, popupCallback }) {
  let miniature;
  let isSelected;

  function shrinkMiniature() {
    if(isSelected) return;

    if(miniature == undefined){   
      miniature = document.getElementById(data.title);   
    } 

    miniature.classList.remove("grow-anim");
    miniature.classList.add("shrink-anim");
  }

  function restoreMiniature() {
    if(isSelected) return;

    miniature.classList.remove("shrink-anim");
    miniature.classList.add("grow-anim")
  }

  function onClick()
  {
    console.log("clicked on " + data.title)
    isSelected = true;
    popupCallback(data);
  }

  return (
    <div
      className="miniature-container"
      onMouseEnter={shrinkMiniature}
      onMouseLeave={restoreMiniature}
    >
      <div id={data.title} className="miniature" onClick={onClick}>
        <img src={data.img} />
        <div className="miniature-details">
          <p className="Title">{data.title}</p>
          <p className="Year">{data.year}</p>
        </div>
      </div>
    </div>
  );
}
