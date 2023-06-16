import React from "react";
import { FindLocalImg } from "../../../../utils";
import ProductInfo from "./ProductInfo";

export default function BookInfo({ productData, returnToDisplayProducts }) {
  let content = {
    gridClass: " grid bookmedia center-children ",

    visualContent: (
      <div name="cover">
        <img
          className="bd-bs1 rounded"
          src={FindLocalImg(productData.imgurl)}
        />
      </div>
    ),

    extratextinfo: (
      <React.Fragment>
        <p>Language: {productData.language}</p>
        <p>Pseudonyme: {productData.pseudonyme}</p>
      </React.Fragment>
    ),

    btnLabel: "Get ebook",
  };

  return (
    <ProductInfo
      content={content}
      productData={productData}
      mediaScreenMax={800}
      returnToDisplayProducts={returnToDisplayProducts}
    />
  );
}
