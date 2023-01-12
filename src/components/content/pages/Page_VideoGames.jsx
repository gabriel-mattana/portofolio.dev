import React from "react";
import "./Page_VideoGames.css";
import MiniaturesDisplayer from "../../displayers/MiniaturesDisplayer";
import { videoGames } from "../data";

export default function Page_VideoGames()
{
    return(
        <React.Fragment>
            <h1>Videos Games</h1>
            <MiniaturesDisplayer props={videoGames}/>
        </React.Fragment>
    );
}