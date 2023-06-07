import React from "react";

export default function ProductInfo_Book({ productData, returnToMenu }) {

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
          <p>{productData.description}</p>
        </div>
      </div>
      <a className="playgame" href={productData.bookurl} target="_blank">
        Get the ebook
      </a>
    </React.Fragment>
  );
}
