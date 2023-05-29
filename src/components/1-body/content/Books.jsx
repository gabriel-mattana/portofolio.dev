import React from "react";
import { books } from "./data";
import SectionTemplate from "./SectionTemplate";

export default function Books()
{
    return(
        <SectionTemplate id="books" content={books}/>
    );
}