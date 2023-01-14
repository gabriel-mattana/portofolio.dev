import React from "react";
import MiniaturesDisplayer from "./displayers/MiniaturesDisplayer";


export default function PageTemplate({content})
{
    return(
        <React.Fragment>
            <h1>Videos Games</h1>
            <MiniaturesDisplayer props={content}/>
        </React.Fragment>
    );
}