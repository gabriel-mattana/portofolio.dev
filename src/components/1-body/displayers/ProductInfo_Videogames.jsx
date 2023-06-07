import React from "react";

export default function ProductInfo_Videogames({productData,returnToMenu}) {
  let productdataId = "productInfo" + productData.title;


  return (
    <React.Fragment>
      <div className="product-description grid rg20">
        <div>
          <img src={productData.img} />
        </div>
        <div className="product-text grid rg20">
          <h2>{productData.title}</h2>
          <button onClick={returnToMenu}>X</button>
          <p>Year: {productData.year}</p>
          <p>Genre: {productData.genre}</p>
          <p>Type: {productData.type}</p>
          <p>Engine: {productData.engine}</p>
          <p>Team: {productData.team}</p>
          <p>Role: {productData.role}</p>
          <p>{productData.description}</p>
        </div>
      </div>
      <iframe
        src={productData.videosrc}
        title={productData.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      />
      {productData.gameurl == undefined ? undefined : (
        <a className="playgame" href={productData.gameurl} target="_blank">
          Play on itch.io
        </a>
      )}
    </React.Fragment>
  );
}
