import React from "react";
import { books } from "./data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";

export default function Books()
{
   const content = <ProductDisplayer productType={books.id} data={books.data} />

    return(
        <SectionTemplate id="books" title="Books" content={content}/>
    );
}