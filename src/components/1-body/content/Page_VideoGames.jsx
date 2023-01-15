import React from "react";
import { videoGames } from "./data";
import PageTemplate from "./PageTemplate";

export default function Page_VideoGames()
{
    return(
        <PageTemplate content={videoGames}/>
    );
}