import React from "react";

export default function ProductInfo({ productData, returnToDisplayProducts }) {
let productdataId = "productInfo" + productData.title
  var btnPlayGame = undefined;
  if (productData.gameurl) {
    btnPlayGame = (
      <a className="playgame" href={productData.gameurl} target="_blank">
        Play the game on itch.io
      </a>
    );
  }

  function returnToProductDisplayer(){
    var productInfo = document.getElementById(productdataId)

    productInfo.classList.remove("fadein")
    productInfo.classList.add("fadeout");

    setTimeout(() => {
        returnToDisplayProducts();
      }, 500);
  }

  return (
    <div id={productdataId} className="product-info-panel grid rg20 fadein">
      <div className="product-description grid rg20">
        <div>
          <img src={productData.img} />
        </div>
        <div className="product-text grid rg20">
          <h2>{productData.title}</h2>
          <button onClick={returnToProductDisplayer}>X</button>
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
      {btnPlayGame}
    </div>
  );
}
