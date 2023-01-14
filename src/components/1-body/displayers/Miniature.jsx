import React from "react";

export default function Miniature({props}) {

  return (
    <div className="miniature">
      <img src={process.env.PUBLIC_URL + props.img} />
      <div className="details">
        <p className="Title">{props.title}</p>
        <p className="Year">{props.year}</p>
      </div>
    </div>
  );
}
