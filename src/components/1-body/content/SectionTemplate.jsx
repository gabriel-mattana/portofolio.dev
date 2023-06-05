import React from "react";
import ProductDisplayer from "../displayers/ProductDisplayer";

export default function SectionTemplate({content})
{
    return(
        <div id={content.id} className="content-container">
            <h1>{content.title}</h1>
            <ProductDisplayer data={content.data} sectionid={content.id}/>
        </div>
    );
}