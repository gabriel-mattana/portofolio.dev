import React, { useContext } from "react";
import { labels, videoGames } from "../../../data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";
import { LangContext } from "../../../utils";

export default function VideoGames()
{
    const content = <ProductDisplayer productType={videoGames.id} data={videoGames.data}/>

    const lang = useContext(LangContext)
    const title = lang == "fr" ? labels.fr : labels.en
    
    return(
        <SectionTemplate id={"videogames"} title={title.games} content={content}/>
    );
}