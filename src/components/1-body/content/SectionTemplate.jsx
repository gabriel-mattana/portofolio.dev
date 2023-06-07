import React from "react";

export default function SectionTemplate({ id, title, content }) {
  return (
    <div id={id} className="section-container">
      <div className="grid section-bg bdr-round">
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
}
