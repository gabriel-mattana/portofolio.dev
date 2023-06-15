import React, { useContext, useRef, useState } from "react";
import NavButton from "./NavButton";
import { FindLocalImg, LangContext, activate, disable } from "../../utils";
import LanguageBtn from "./LanguageBtn";
import { labels } from "../../data";

function NavBar({changeLangCallBack}) {
  window.addEventListener("resize", monitorScreenSizeChange);

  const lang = useContext(LangContext)
  const label = lang == "fr" ? labels.fr : labels.en
  const dropDownDisplayed = useRef(false)

  let isSmallScreen = false;
  const [screenSizeState, updateScreenSizeState] = useState(isSmallScreen);

  const navButtons = (
    <div className="flex spacedAway" >
      <div className="flex navbuttons">
      <NavButton link={"videogames"} label={label.games} />
      <NavButton link={"books"} label={label.books} />
      <NavButton link={"contact"} label="Contact" />
      </div>
      <div className="grid">
      <LanguageBtn changeLangCallBack={changeLangCallBack}/>
      </div>
    </div>
  );

  const hamburger = (
      <div className="flex hamburgerbar">
        <div className="flex-col">
          <button className="btn-dropdown" onClick={toggleDropDown}>
            <img
              src={FindLocalImg("icons/hamburger_menu.svg")}
              alt="hamburger_menu"
            />
          </button>
          <div id="dropdown" className="grid hidden">
            <NavButton link={"videogames"} label="Video games" />
            <NavButton link={"books"} label="Books" />
            <NavButton link={"contact"} label="Contact" />
            <LanguageBtn changeLangCallBack={changeLangCallBack}/>
          </div>
        </div>
      </div>
  );

  function monitorScreenSizeChange() {
    if (window.matchMedia("(max-width:600px)").matches) {
      isSmallScreen = true;
    }
    else{
      isSmallScreen = false;
    }

    if (screenSizeState !=  isSmallScreen) {
      updateScreenSizeState(isSmallScreen);

      if(dropDownDisplayed.current)
      {
        toggleDropDown()
      }
    }
  }

  function toggleDropDown() {
    var dropdown = document.getElementById("dropdown");
    var veil = document.getElementById("veil");

    if(!dropDownDisplayed.current)
    {
      dropDownDisplayed.current = true;
      activate(dropdown);
      activate(veil)
    }
    else
    {
      dropDownDisplayed.current = false;
      disable(dropdown)
      disable(veil)
    }
  }

  monitorScreenSizeChange();

  return (
    <React.Fragment>
    <nav id="navbar">
      <div className="navbrand">
        <NavButton link={"introduction"} label="Gabriel Mattana" />
      </div>
      {isSmallScreen == true ? hamburger : navButtons}
    </nav>
    <div id="veil" className="hidden" onClick={toggleDropDown}/>
    </React.Fragment>
  );
}

export default NavBar;
