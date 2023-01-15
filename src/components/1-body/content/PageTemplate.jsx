import React from "react";
import MiniaturesDisplayer from "../displayers/MiniaturesDisplayer";


export default function PageTemplate({content})
{
    return(
        <React.Fragment>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
            <MiniaturesDisplayer props={content.data}/>
        </React.Fragment>
    );
}