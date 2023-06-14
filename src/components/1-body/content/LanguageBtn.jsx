import { useState } from "react";
import IconBtn from "./IconBtn";

const langs = {french: "fr", english: "en"}

export default function LanguageBtn() {
  console.log("LanguageBtn rendered");

  let defaultLang = navigator.language.toLocaleLowerCase().split("-")[0];
  console.log("default language detected: " + defaultLang);
  const [langState, updateLangState] = useState(defaultLang)
  console.log("chosen language: " + langState);

  function switchLanguage(event) {
    switch (langState) {
        case "en":
            updateLangState(langs.french)
            break;
        
        case "fr":
            updateLangState(langs.english)
            break;
    
        default:
            updateLangState(langs.english)
            break;
    }
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
