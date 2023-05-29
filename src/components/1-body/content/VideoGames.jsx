import React from "react";
import { videoGames } from "./data";
import SectionTemplate from "./SectionTemplate";

export default function VideoGames()
{
    return(
        <SectionTemplate id="videogames" content={videoGames}/>
    );
}