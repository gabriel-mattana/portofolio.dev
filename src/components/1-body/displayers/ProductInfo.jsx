import React from "react";

export default function ProductInfo({
  productType,
  productData,
  returnToDisplayProducts,
}) {
  let productdataId = "productInfo" + productData.title;

  function returnToMenu() {
    var productInfo = document.getElementById(productdataId);
    productInfo.classList.remove("fadein");
    productInfo.classList.add("fadeout");

    setTimeout(() => {
      returnToDisplayProducts();
    }, 500);
  }

  let extratextinfo = undefined;
  let extraContent = undefined;
  let btnLabel = "";
  if (productType == "videogames") {
    // panelToDisplay = <ProductInfo_Videogames productData={productData} returnToMenu={returnToMenu}/>
    extratextinfo = (
      <React.Fragment>
        <p>Type: {productData.type}</p>
        <p>Engine: {productData.engine}</p>
        <p>Team: {productData.team}</p>
        <p>Role: {productData.role}</p>
      </React.Fragment>
    );
    extraContent = (
      <iframe
        src={productData.videosrc}
        title={productData.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      />
    );
    btnLabel = "Play on itch.io";
  } else if (productType == "books") {
    extraContent = <img className="bd-bs1 bdr-round" src={productData.img} />;
    extratextinfo = <p>Pseudonyme: {productData.pseudonyme}</p>;
    btnLabel = "Get ebook";
  }

  return (
    <div id={productdataId} className="product-info-panel grid bdr-round fadein">
        <div className="product-visuals">
          {extraContent}
        </div>
        <div className="product-description-text grid rg20">
          <h2>{productData.title}</h2>
          <p>Year: {productData.year}</p>
          <p>Genre: {productData.genre}</p>
          {extratextinfo}
          <p>{productData.description}</p>
          <div className="btncontainer flex">
            {productData.producturl == undefined ? undefined : (
                <a href={productData.producturl} target="_blank">
                  <button className="productbtn btngotoproduct" >{btnLabel}</button> 
                </a>
            )}
            <button
              className="productbtn btnreturntomenu"
              onClick={returnToMenu}
            >
              Return
            </button>
          </div>
        </div>
    </div>
  );
}
