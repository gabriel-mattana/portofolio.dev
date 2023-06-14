import React, { useContext } from "react";
import { books, labels } from "../../../data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";
import { LangContext } from "../../../utils";

export default function Books()
{
   const content = <ProductDisplayer productType={books.id} data={books.data} />

   const lang = useContext(LangContext)
   const title = lang == "fr" ? labels.fr : labels.en

    return(
        <SectionTemplate id="books" title={title.books} content={content}/>
    );
}