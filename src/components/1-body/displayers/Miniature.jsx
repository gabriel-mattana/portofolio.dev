import React from "react";

export default function Miniature({props}) {

  return (
    <div className="miniature">
      <img src={props.img} />
      <div className="details">
        <p className="Title">{props.title}</p>
        <p className="Year">{props.year}</p>
      </div>
    </div>
  );
}
