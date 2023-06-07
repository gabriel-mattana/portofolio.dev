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
    // panelToDisplay = <ProductInfo_Book productData={productData} returnToMenu={returnToMenu}/>

    btnLabel = "Get ebook";
  }

  return (
    <div id={productdataId} className="product-info-panel grid rg20 fadein">
      <div className="product-description grid rg20">
        <div>
          <img src={productData.img} />
          {productData.producturl == undefined ? undefined : (
              <a className="btngotoproduct flex" href={productData.producturl}target="_blank">
              {btnLabel}
              </a>)
          }
        </div>
        <div className="product-text grid rg20">
          <h2>{productData.title}</h2>
          <p>Year: {productData.year}</p>
          <p>Genre: {productData.genre}</p>
          {extratextinfo}
          <p>{productData.description}</p>
        </div>
      </div>
      {extraContent}
      <button onClick={returnToMenu}>Return to menu</button>
    </div>
  );
}
