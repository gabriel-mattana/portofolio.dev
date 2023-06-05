import React, { useRef, useState } from "react";
import Miniature from "./Miniature";

const FADEIN = "fadeout 0.3s forwards";

export default function ProductDisplayer({ data, sectionid }) {
  var keyNb = 0;
  let displayerid = "displayer" + sectionid;

  var miniatures = data.map((item) => (
    <Miniature
      data={item}
      key={keyNb++}
      popupCallback={displayInfoOnProduct}
    ></Miniature>
  ));

  let [stateContent, updateContent] = useState(miniatures);

  function displayInfoOnProduct(productData) {
    let displayer = document.getElementById(displayerid);
    let children = displayer.childNodes;
    let selection = 0;

    for (let i = 0; i < children.length; i++) {
      var miniatureContainer = children[i];
      if (data[i].title != productData.title) {
        miniatureContainer.classList.add("fadeout");
      } else {
        selection = miniatureContainer.children[0];
        selection.classList.remove("shrink-anim", "miniature-selected");
      }
    }

    let root = document.documentElement;
    let y = displayer.offsetTop - selection.offsetTop;
    // console.log(y)
    let x = displayer.offsetLeft - selection.offsetLeft;
    // console.log(x)
    root.style.setProperty("--posX", x + "px");
    root.style.setProperty("--posY", y + "px");

    console.log();

    let delay = 500;
    setTimeout(() => {
      selection.classList.add("toFirstCell");
    }, delay);

    let newContent = (
      <React.Fragment>
        <Miniature data={productData}/>
        <div className="product-description" style={{minHeight:displayer.offsetHeight}}>
          <h2>{productData.title}</h2>
        </div>
      </React.Fragment>
      
    );

    setTimeout(() => {
      updateContent(newContent);
    }, delay + 400);
  }

  return (
    <React.Fragment>
      <div id={displayerid} className="productdisplayer">
        {stateContent}
      </div>
    </React.Fragment>
  );
}
