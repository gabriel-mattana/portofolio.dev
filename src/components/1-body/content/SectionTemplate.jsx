import React from "react";
import ProductDisplayer from "../displayers/ProductDisplayer";

export default function SectionTemplate({ id, title, content }) {
  return (
    <div id={id} className="section-container grid">
      <div className="section-bg">
        <h1>{title}</h1>
        {content}
      </div>
    </div>
  );
}
