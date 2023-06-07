import React from "react";
import { videoGames } from "./data";
import SectionTemplate from "./SectionTemplate";
import ProductDisplayer from "../displayers/ProductDisplayer";

export default function VideoGames()
{
    const content = <ProductDisplayer productType={videoGames.id} data={videoGames.data}/>
    
    return(
        <SectionTemplate id={"videogames"} title={"Video games"} content={content}/>
    );
}