import React, { useContext, useState } from "react";
import { FindLocalImg, LangContext, ScrollToProduct, ScrollToSection } from "../../../../utils";

export default function ProductInfo({productType, productData, returnToDisplayProducts,}) {
  let productdataId = "productInfo" + productData.title;

  function returnToMenu() {

    var productInfo = document.getElementById(productdataId);
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

  let extratextinfo = undefined;
  let visualContent = undefined;
  let gridClass = undefined;
  let btnLabel = "";

  if (productType == "videogames") {
    gridClass = "grid60-40";

    extratextinfo = (
      <React.Fragment>
        <p>Type: {productData.type}</p>
        <p>Engine: {productData.engine}</p>
        <p>Team: {productData.team}</p>
        <p>Role: {productData.role}</p>
      </React.Fragment>
    );

    visualContent = (
      <div className="grid rg10 product-visuals content-cv">
        <iframe
          src={productData.videosrc}
          title={productData.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />
        <div className="smallimgs_container">
          {productData.small_imgsurl.map((imgurl, i) => (
            <img
              className="bd-bs1"
              key={"small_img" + i}
              src={FindLocalImg(imgurl)}
              alt={productData.title + i}
            />
          ))}
        </div>
      </div>
    );
    btnLabel = "Play";
  } else if (productType == "books") {
    gridClass = "grid50-50";

    visualContent = (
      <div className="product-visuals">
        <img
          className="bd-bs1 bdr-round"
          src={FindLocalImg(productData.imgurl)}
        />
      </div>
    );

    extratextinfo = (
      <React.Fragment>
        <p>Language: {productData.language}</p>
        <p>Pseudonyme: {productData.pseudonyme}</p>
      </React.Fragment>
    );
    btnLabel = "Get ebook";
  } 

    //TITLE CHANGE POSITION
  const title = <h2>{productData.title}</h2>;
  window.addEventListener("resize", resizeDialogDynamically)

  let smallScreen = false;
  const [previousRenderState, updateRenderState] = useState(smallScreen)

  function resizeDialogDynamically(){
      if (!window.matchMedia("(max-width:1000px)").matches) {
        smallScreen = false;
      } else {
        smallScreen = true
      }

      if(previousRenderState != smallScreen)
      {
        // console.log("change screen size")
        updateRenderState(smallScreen)
      }
  }

 resizeDialogDynamically();

 //LANG
 const lang = useContext(LangContext)
 let description = lang == "fr" ? productData.description.fr : productData.description.en 


  return (
    <div
      id={productdataId} className={gridClass + " product-info-panel bdr-round fadein content-cv"}>
      {smallScreen == true ? title: undefined}
      {visualContent}
      <div name="product-description" className="flex-col rg20 spacedAway">
        <div className="product-description-text grid rg10">
          {smallScreen == false ? title : undefined}
          <p>Year: {productData.year}</p>
          <p>Genre: {productData.genre}</p>
          {extratextinfo}
          <p>{description}</p>
        </div>
        <div className="btncontainer flex">
          {productData.producturl == undefined ? undefined : (
            <a href={productData.producturl} target="_blank">
              <button className="productbtn btngotoproduct">{btnLabel}</button>
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
