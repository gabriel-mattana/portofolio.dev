import React from "react";
import NavButton from "./NavButton";
import PageTemplate from "../1-body/content/PageTemplate";
import "./NavBar.css";

import { videoGames, books } from "../1-body/data";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton link={<PageTemplate />} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={<PageTemplate />} label="Projects" />
        <NavButton link={<PageTemplate content={videoGames}/>} label="Video games" />
        <NavButton link={<PageTemplate content={books}/>} label="Books" />
        <NavButton link={<PageTemplate />} label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
