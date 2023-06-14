import { createContext } from "react";

export function ScrollToSection(id){
    var height = document.getElementById(id).offsetTop
    window.scrollTo({top: height,behavior:"smooth"});
}

export function ScrollToProduct(id){
    var height = document.getElementById(id).offsetTop
    console.log(height)
    var offsettring = getComputedStyle(document.documentElement).getPropertyValue("--HeaderHeight")
    var offset = screen.height / offsettring.split("v")[0];
    console.log("offset: " + offset)
    var yPos = height - offset*1.25
    console.log(yPos)
    window.scrollTo({top: yPos,behavior:"smooth"});
}

export function FindLocalImg(imgurl){
    return process.env.PUBLIC_URL + "/images/" + imgurl;
}

export const LangContext = createContext()
