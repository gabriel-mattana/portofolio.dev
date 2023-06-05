import React from "react";
import Miniature from "./Miniature";

export default function ProductInfo({productData})
{


 var btnPlayGame = undefined;
 if(productData.gameurl)
 {
    btnPlayGame = <a className="playgame" href={productData.gameurl} target="_blank">Play the game on itch.io</a>
 } 





    return(
        <React.Fragment>
        <Miniature data={productData}/>
        <div className="product-description">
          <h2>{productData.title}</h2>
          <p>Engine: {productData.engine}</p>
          <p>Team: {productData.team}</p>
          <p>Role: {productData.role}</p>
          <p>Description: {productData.description}</p>
          {btnPlayGame}        
        </div>
        <div className="embededvideo">
            <iframe width="802" height="451" src={productData.videosrc} title={productData.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
      </React.Fragment>
    );
}