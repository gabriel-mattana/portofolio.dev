import React from "react";
import ProductInfo_Videogames from "./ProductInfo_Videogames";
import ProductInfo_Book from "./ProductInfo_Book";

export default function ProductInfo({ productType, productData, returnToDisplayProducts }) {
  let productdataId = "productInfo" + productData.title;

  function returnToMenu() {
    var productInfo = document.getElementById(productdataId);

    productInfo.classList.remove("fadein");
    productInfo.classList.add("fadeout");

    setTimeout(() => {
      returnToDisplayProducts();
    }, 500);
  }

  let panelToDisplay = 0;
  if(productType == "videogames")
  {
    panelToDisplay = <ProductInfo_Videogames productData={productData} returnToMenu={returnToMenu}/>
  }
  else if(productType == "books") {
    panelToDisplay = <ProductInfo_Book productData={productData} returnToMenu={returnToMenu}/>
  }

  return (
    <div id={productdataId} className="product-info-panel grid rg20 fadein">
      {panelToDisplay}
    </div>);
    
}
