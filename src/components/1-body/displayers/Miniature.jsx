import React from "react";

export default function Miniature({ props }) {
  let miniature;

  function shrinkMiniature() {
    if(miniature == undefined){   
      miniature = document.getElementById(props.title);   
    } 
    
    miniature.classList.remove("grow-anim");
    miniature.classList.add("shrink-anim");
  }

  function restoreMiniature() {
    miniature.classList.remove("shrink-anim");
    miniature.classList.add("grow-anim")
  }

  return (
    <div
      className="miniature-container"
      onMouseEnter={shrinkMiniature}
      onMouseLeave={restoreMiniature}
    >
      <div id={props.title} className="miniature">
        <img src={props.img} />
        <div className="miniature-details">
          <p className="Title">{props.title}</p>
          <p className="Year">{props.year}</p>
        </div>
      </div>
    </div>
  );
}
