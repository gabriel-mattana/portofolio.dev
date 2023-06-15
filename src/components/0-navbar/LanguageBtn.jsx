import { useContext } from "react";
import { LangContext } from "../../utils";
import IconBtn from "../1-body/components/buttons/IconBtn";

export default function LanguageBtn({changeLangCallBack}) {
  // console.log("LanguageBtn rendered");
  const langContext = useContext(LangContext)
  const iconToDisplay = langContext == "en"? "fr" : "en"

  return (
    <IconBtn
      callback={changeLangCallBack}
      imgurl={"icons/" + iconToDisplay + "_flag.png"}
      extraCss={"btnlang"}
      alt={iconToDisplay + " flag"}
    />
  );
}
