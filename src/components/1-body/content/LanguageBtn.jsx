import { useContext, useState } from "react";
import IconBtn from "./IconBtn";
import { LangContext } from "../../../utils";

const langs = {french: "fr", english: "en"}

export default function LanguageBtn({changeLangCallBack}) {
  console.log("LanguageBtn rendered");
  const langState = useContext(LangContext)

  function switchLanguage() {
    let newLang = ""
    switch (langState) {
        case "en":
            newLang= langs.french
            break;
        
        case "fr":
            newLang = langs.english
            break;
    
        default:
            newLang = langs.english
            break;
    }
    changeLangCallBack(newLang)
  }

  return (
    <IconBtn
      callback={switchLanguage}
      imgurl={"icons/" + langState + "_flag.png"}
      extraCss={"btnlang"}
      alt={langState + " flag"}
    />
  );
}
