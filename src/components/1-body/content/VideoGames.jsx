import React, { useContext } from "react";
import { labels, videoGames } from "../../../data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";
import { LangContext } from "../../../utils";

export default function VideoGames()
{
    const lang = useContext(LangContext)
    const content = <ProductDisplayer productType={videoGames.id} data={videoGames.data}/>
    
    return(
        <SectionTemplate id={"videogames"} title={labels[lang].games} content={content}/>
    );
}