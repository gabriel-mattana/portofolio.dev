import AbsoluteBtn from "./AbsoluteBtn";


export default function LanguageBtn()
{
    console.log("LanguageBtn rendered")

    let iconToDisplayUrl = "";
    let defaultLang = navigator.language.toLocaleLowerCase();
    console.log("default language detected: " + defaultLang)

    if(defaultLang == "fr-fr"){
        iconToDisplayUrl = "icons/french_icon.png";
    }
    else
    {
        iconToDisplayUrl = "icons/english_icon.png";
    }


    function switchLanguage(event)
    {
        console.log(event)
    }

    return (
    <AbsoluteBtn callback={switchLanguage} imgurl={iconToDisplayUrl} extraCss={"btnlang downleft"}/>);
}