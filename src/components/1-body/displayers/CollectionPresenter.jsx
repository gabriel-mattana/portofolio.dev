import React from "react";
import MiniaturesDisplayer from "./MiniaturesDisplayer";


export default function CollectionPresenter({content})
{
    return(
        <React.Fragment>
            <h1>Videos Games</h1>
            <MiniaturesDisplayer props={content}/>
        </React.Fragment>
    );
}