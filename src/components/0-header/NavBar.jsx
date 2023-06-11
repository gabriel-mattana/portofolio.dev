import React, { useRef, useState } from "react";
import NavButton from "./NavButton";
import { FindLocalImg } from "../../utils";

function NavBar() {
  window.addEventListener("resize", changeNavButtons);
  let smallScreen = false;
  const [previousRenderState, updateRenderState] = useState(smallScreen);
  const navButtons = (
    <div className="flex navbuttons">
      <NavButton link={"videogames"} label="Video games" />
      <NavButton link={"books"} label="Books" />
      <NavButton link={"contact"} label="Contact" />
    </div>
  );

  var isDisplaying = useRef(false)
  function displayDropDown() {
    console.log(isDisplaying.current)
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

  const hamburger = (
    <div className="flex hamburgerbar">
      <div className="grid hamburger">
        <button className="btn-dropdown" onClick={displayDropDown}>
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
    if (!window.matchMedia("(max-width:600px)").matches) {
      smallScreen = false;
      console.log("display navButtons menu");
    } else {
      smallScreen = true;
      console.log("display hamburger menu");
    }

    if (previousRenderState != smallScreen) {
      console.log("change screen size");
      updateRenderState(smallScreen);
    }
  }

  changeNavButtons();

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
