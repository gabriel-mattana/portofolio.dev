import React from "react";
import Miniature from "./Miniature";

export default function ProductInfo({productData})
{
    return(
        <React.Fragment>
        <Miniature data={productData}/>
        <div className="product-description">
          <h2>{productData.title}</h2>
        </div>
      </React.Fragment>
    );
}