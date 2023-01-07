import React from "react";
import Miniature from "./Miniature";
import "./Page_VideoGames.css";

export default function Page_VideoGames()
{
    return(
        <React.Fragment>
        <h1>Video games page</h1>
        <div className="miniature-displayer">
        <Miniature 
            img={process.env.PUBLIC_URL +"/images/HandleTheCrate_title.png"}
            title={"Handle the crate"}
            year={"2022"}>
        </Miniature>
        <Miniature 
            img={process.env.PUBLIC_URL +"/images/HandleTheCrate_title.png"}
            title={"Handle the crate"}
            year={"2022"}>
        </Miniature>
        <Miniature 
            img={process.env.PUBLIC_URL +"/images/HandleTheCrate_title.png"}
            title={"Handle the crate"}
            year={"2022"}>
        </Miniature>
        <Miniature 
            img={process.env.PUBLIC_URL +"/images/HandleTheCrate_title.png"}
            title={"Handle the crate"}
            year={"2022"}>
        </Miniature>
        </div>
        </React.Fragment>
    );
}