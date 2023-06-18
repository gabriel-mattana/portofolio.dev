import { useContext } from "react";
import { intro } from "../../../data";
import { FindLocalImg, LangContext } from "../../../utils";
import SectionTemplate from "./SectionTemplate";

export default function Introduction() {
  const lang = useContext(LangContext);

  const introToUse = lang == "fr" ? intro.fr : intro.en;

  const content = (
    <div className="grid intro">
      <div className="grid items-ch">
        <img
          className="meicon bd-bs1"
          src={FindLocalImg("icons/me_icon.jpg")}
          alt="my picture"
        />
      </div>
      <div className="grid rg20">
        <div className="grid rg20 intro-txt-container intro-font">
          <p>
            {introToUse[0]}
          </p>
          <p>
          {introToUse[1]}
          </p>
          <p>
           <i>{introToUse[2]}</i> 
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <SectionTemplate
      id="introduction"
      title="Full stack programmer / game developer"
      content={content}
    />
  );
}
