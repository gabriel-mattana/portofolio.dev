import React from "react";
import MiniaturesDisplayer from "../displayers/MiniaturesDisplayer";

export default function SectionTemplate({content})
{
    return(
        <div id={content.id} className="content-container">
            <h1>{content.title}</h1>
            <MiniaturesDisplayer props={content.data}/>
        </div>
    );
}