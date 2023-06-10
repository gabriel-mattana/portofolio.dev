import React, { useRef, useState } from "react";
import Miniature from "./Miniature";
import ProductInfo from "./ProductInfo";
import { PlaceProductInView } from "../../../utils";

export default function ProductDisplayer({ productType, data }) {
  var keyNb = 0;
  let displayerid = "displayer" + productType;

  let productDisplayer = (
  <div id={displayerid} className="productdisplayer fadein">
    {data.map((item) => (
    <Miniature
      data={item}
      key={keyNb++}
      popupCallback={displayInfoOnProduct}
    />))}
  </div>);

  let [stateContent, updateContent] = useState(productDisplayer);

  function displayInfoOnProduct(productData) {
    PlaceProductInView(displayerid)
    let displayer = document.getElementById(displayerid);
    displayer.classList.replace("fadein", "fadeout")

    let newContent = (
      <ProductInfo productType={productType} productData={productData} returnToDisplayProducts={() => updateContent(productDisplayer)}/>
    );

    setTimeout(() => {
      updateContent(newContent);
    }, 500);
  }

  return (
    <React.Fragment>
      {stateContent}
    </React.Fragment>
  );
}
