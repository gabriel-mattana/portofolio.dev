import React from "react";
import Miniature from "./Miniature";

export default function ProductInfo({ productData }) {
  var btnPlayGame = undefined;
  if (productData.gameurl) {
    btnPlayGame = (
      <a className="playgame" href={productData.gameurl} target="_blank">
        Play the game on itch.io
      </a>
    );
  }

  return (
    <div className="product-info-panel">
      <div className="product-description">
        <div>
          <img src={productData.img} />
        </div>
        <div>
          <h2>{productData.title}</h2>
          <p>Engine: {productData.engine}</p>
          <p>Team: {productData.team}</p>
          <p>Role: {productData.role}</p>
          <p>Description: {productData.description}</p>
          {btnPlayGame}
        </div>
      </div>
      <div className="embededvideo">
        <iframe
          width="802"
          height="451"
          src={productData.videosrc}
          title={productData.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
