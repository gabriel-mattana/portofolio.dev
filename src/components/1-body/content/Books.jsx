import React, { useContext } from "react";
import { books, labels } from "../../../data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";
import { LangContext } from "../../../utils";

export default function Books()
{
    const lang = useContext(LangContext)
    const content = <ProductDisplayer productType={books.id} data={books.data} />

    return(
        <SectionTemplate id="books" title={labels[lang].books} content={content}/>
    );
}