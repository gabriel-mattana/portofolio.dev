import React, { useRef, useState } from "react";
import NavButton from "./NavButton";
import { FindLocalImg } from "../../utils";
import LanguageBtn from "../1-body/content/LanguageBtn";

function NavBar() {
  window.addEventListener("resize", changeNavButtons);
  let smallScreen = false;
  const [screenSizeState, updateScreenSizeState] = useState(smallScreen);
  console.log("screen size state: " + screenSizeState)

  const navButtons = (
    <div className="flex spacedAway" >
      <div className="flex navbuttons">
      <NavButton link={"videogames"} label="Video games" />
      <NavButton link={"books"} label="Books" />
      <NavButton link={"contact"} label="Contact" />
      </div>
      <div className="grid">
      <LanguageBtn/>
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
    if (window.matchMedia("(max-width:600px)").matches) {
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
