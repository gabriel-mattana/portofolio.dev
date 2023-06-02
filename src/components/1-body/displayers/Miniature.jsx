import React from "react";

export default function Miniature({ props }) {
  let miniature;

  function shrinkMiniature() {
    miniature = document.getElementById(props.title);
    miniature.style.animation = "shrink 0.75s forwards";
  }

  function restoreMiniature() {
    miniature.style.animation = "grow 0.5s forwards";
  }

  return (
    <div
      className="miniature-container"
      onMouseEnter={shrinkMiniature}
      onMouseLeave={restoreMiniature}
    >
      <div id={props.title} className="miniature">
        <img src={props.img} />
        <div className="details">
          <p className="Title">{props.title}</p>
          <p className="Year">{props.year}</p>
        </div>
      </div>
    </div>
  );
}
