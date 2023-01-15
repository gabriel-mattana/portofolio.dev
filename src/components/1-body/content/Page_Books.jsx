import React from "react";
import { books } from "./data";
import PageTemplate from "./PageTemplate";

export default function Page_Books()
{
    return(
        <PageTemplate content={books}/>
    );
}