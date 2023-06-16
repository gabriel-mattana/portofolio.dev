import React, { useContext, useState } from "react";
import { LangContext, ScrollToProduct } from "../../../../utils";

export default function ProductInfo({content, productData, mediaScreenMax, returnToDisplayProducts,}) {
  let productdataId = "productInfo" + productData.title;
  const title = <h2>{productData.title}</h2>;

  console.log(productData)
  console.log(content)

  function returnToMenu() {
    let productInfo = document.getElementById(productdataId);
    productInfo.classList.remove("fadein");
    productInfo.classList.add("fadeout");

    setTimeout(() => {

      if (window.matchMedia("(max-width:420px)").matches) {
        returnToDisplayProducts();
        setTimeout(() => {
          ScrollToProduct(productData.title);
        }, 100);
      } 
      else
      {
        returnToDisplayProducts();
      }
      
    }, 500);   
  }

  //TITLE CHANGE POSITION
  window.addEventListener("resize", resizeDialogDynamically)
  const [isSmallScreen, updateRenderState] = useState(false)

  function resizeDialogDynamically(){
    let changeLayout = false;

      if (window.matchMedia("(max-width:" + mediaScreenMax + "px)").matches) {
        changeLayout = true;
      }

      if(isSmallScreen != changeLayout)
      {
        // console.log("change screen size")
        updateRenderState(changeLayout)
      }
  }

 resizeDialogDynamically();

 //LANG
 const lang = useContext(LangContext)
 let description = lang == "fr" ? productData.description.fr : productData.description.en 


  return (
    <div
      id={productdataId} className={content.gridClass + " product-info-panel bdr-round fadein"}>
      {isSmallScreen == true ? title: undefined}
      {isSmallScreen == true ? <br/> : undefined}
      {content.visualContent}
      <div name="product-description" className="flex-col rg20 spacedAway product-description">
        {isSmallScreen == false ? title : undefined}
        {isSmallScreen == true ? <br/> : undefined}
        <div className="product-description-text grid rg5">
          <p>Year: {productData.year}</p>
          <p>Genre: {productData.genre}</p>
          {content.extratextinfo}
          <br/>
          <p>{description}</p>
        </div>
        <br/>
        <div className="btncontainer flex">
          {productData.producturl == undefined ? undefined : (
            <a href={productData.producturl} target="_blank">
              <button className="productbtn btngotoproduct">{content.btnLabel}</button>
            </a>
          )}
          <button className="productbtn btnreturntomenu" onClick={returnToMenu}>
            Return
          </button>
        </div>
      </div>
    </div>
  );
}
