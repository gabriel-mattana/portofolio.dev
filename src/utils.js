import { createContext } from "react";

export function ScrollToSection(id){
    var height = document.getElementById(id).offsetTop
    window.scrollTo({top: height,behavior:"smooth"});
}

export function ScrollToProduct(id){
    var height = document.getElementById(id).offsetTop
    var offsettring = getComputedStyle(document.documentElement).getPropertyValue("--HeaderHeight")
    var offset = screen.height / offsettring.split("v")[0];
    var yPos = height - offset*1.25
    window.scrollTo({top: yPos,behavior:"smooth"});
}

export function FindLocalImg(imgurl){
    return process.env.PUBLIC_URL + "/images/" + imgurl;
}

export function activate(element)
{
    element.classList.replace("hidden", "visible");
}

export function disable(element)
{
    element.classList.replace("visible", "hidden");
}

export const LangContext = createContext()
