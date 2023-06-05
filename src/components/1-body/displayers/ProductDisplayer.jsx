import React, { useRef, useState } from "react";
import Miniature from "./Miniature";
import ProductInfo from "./ProductInfo";

export default function ProductDisplayer({ data, sectionid }) {
  var keyNb = 0;
  let displayerid = "displayer" + sectionid;

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
    let displayer = document.getElementById(displayerid);
    let children = displayer.childNodes;

    // for (let i = 0; i < children.length; i++) {
    //   var miniatureContainer = children[i];
    //   miniatureContainer.classList.add("fadeout");
    // }

    displayer.classList.remove("fadein")
    displayer.classList.add("fadeout")

    let newContent = (
      <ProductInfo productData={productData} returnToDisplayProducts={() => updateContent(productDisplayer)}/>
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
