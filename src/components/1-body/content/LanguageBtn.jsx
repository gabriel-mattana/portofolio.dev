import { useContext } from "react";
import IconBtn from "./IconBtn";
import { LangContext } from "../../../utils";

export default function LanguageBtn({changeLangCallBack}) {
  console.log("LanguageBtn rendered");

  const langContext = useContext(LangContext)
  const iconToDisplay = langContext == "en"? "fr" : "en"
  console.log("chosen language: " + langContext);

  return (
    <IconBtn
      callback={changeLangCallBack}
      imgurl={"icons/" + iconToDisplay + "_flag.png"}
      extraCss={"btnlang"}
      alt={iconToDisplay + " flag"}
    />
  );
}
