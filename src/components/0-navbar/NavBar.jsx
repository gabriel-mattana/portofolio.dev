import React, { useContext, useRef, useState } from "react";
import NavButton from "./NavButton";
import { FindLocalImg, LangContext } from "../../utils";
import LanguageBtn from "./LanguageBtn";
import { labels } from "../../data";

function NavBar({changeLangCallBack}) {
  window.addEventListener("resize", changeNavButtons);

  const lang = useContext(LangContext)
  const label = lang == "fr" ? labels.fr : labels.en


  let smallScreen = false;
  const [screenSizeState, updateScreenSizeState] = useState(smallScreen);


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
      <div className="grid hamburger">
        <button className="btn-dropdown" onClick={toggleDropDown}>
          <img
            src={FindLocalImg("icons/hamburger_icon.png")}
            alt="hamburger_icon"
          />
        </button>
        <div id="dropdown" className="grid hamburger-dropdown hidden">
          <NavButton link={"videogames"} label="Video games" />
          <NavButton link={"books"} label="Books" />
          <NavButton link={"contact"} label="Contact" />
        </div>
      </div>
    </div>
  );

  function changeNavButtons() {
    if (window.matchMedia("(max-width:650px)").matches) {
      smallScreen = true;
    }
    else{
      smallScreen = false;
    }

    if (screenSizeState !=   smallScreen) {
      updateScreenSizeState(smallScreen);
    }
  }

  changeNavButtons();

  var isDisplaying = useRef(false)
  function toggleDropDown() {
    var dropdown = document.getElementById("dropdown");
    if(!isDisplaying.current)
    {
      dropdown.classList.replace("hidden", "visible");
      isDisplaying.current = true;
    }
    else
    {
      dropdown.classList.replace("visible", "hidden");
      isDisplaying.current = false;
    }
  }

  return (
    <nav id="navbar">
      <div className="navbrand">
        <NavButton link={"introduction"} label="Gabriel Mattana" />
      </div>
      {smallScreen == true ? hamburger : navButtons}
    </nav>
  );
}

export default NavBar;
