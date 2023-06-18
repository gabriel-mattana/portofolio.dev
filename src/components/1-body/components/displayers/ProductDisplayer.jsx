import React, { useState } from "react";
import Miniature from "./Miniature";
import { ScrollToSection } from "../../../../utils";
import BookInfo from "./BookInfo";
import GameInfo from "./GameInfo";

export default function ProductDisplayer({ productType, data }) {
  var keyNb = 0;
  let displayerid = "displayer" + productType;

  let productDisplayer = (
  <div id={displayerid} className="grid productdisplayer fadein">
    {data.map((item) => (
    <Miniature
      data={item}
      key={keyNb++}
      popupCallback={displayInfoOnProduct}
    />))}
  </div>);

  let [stateContent, updateContent] = useState(productDisplayer);

  function displayInfoOnProduct(productData) {
    ScrollToSection(productType)
    let displayer = document.getElementById(displayerid);
    displayer.classList.replace("fadein", "fadeout")

    let newContent = undefined;
    if(productType == "videogames")
    {
      newContent = <GameInfo productType={productType} productData={productData} returnToDisplayProducts={() => updateContent(productDisplayer)}/>
    }
    else if(productType == "books")
    {
      newContent = <BookInfo productType={productType} productData={productData} returnToDisplayProducts={() => updateContent(productDisplayer)}/>
    }


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
