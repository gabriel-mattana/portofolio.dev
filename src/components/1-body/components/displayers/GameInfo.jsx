import React from "react";
import { FindLocalImg, ScrollToProduct } from "../../../../utils";
import ProductInfo from "./ProductInfo";

export default function GameInfo({ productData, returnToDisplayProducts,}) {

  let content = {
    gridClass : "grid gamemedia",

    extratextinfo : (
      <React.Fragment>
        <p>Type: {productData.type}</p>
        <p>Engine: {productData.engine}</p>
        <p>Team: {productData.team}</p>
        <p>Role: {productData.role}</p>
      </React.Fragment>
    ),

    visualContent : (
      <div className="grid rg10 visualmedia">
        <iframe
          src={productData.videosrc}
          title={productData.title}
          className="w100"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
          allowFullScreen
        />
        <div className="grid smallimgs_container">
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
    ),
    btnLabel : "Play"
  } 

  console.log(content)

  return (
      <ProductInfo
        content={content}
        productData={productData}
        mediaScreenMax={1200}
        returnToDisplayProducts={returnToDisplayProducts}
      />
    );
}
