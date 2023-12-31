import React from "react";

export default function SectionTemplate({ id, title, content }) {
  // console.log("section " + id + " rendered")
  return (
    <div id={id} className="section-container">
      <div className="grid section-bg round">
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
}
