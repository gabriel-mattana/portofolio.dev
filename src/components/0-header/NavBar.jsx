import React from "react";
import NavButton from "./NavButton";
import PageTemplate from "../1-body/content/PageTemplate";
import Page_VideoGames from "../1-body/content/Page_VideoGames";
import Page_Books from "../1-body/content/Page_Books";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton link={<PageTemplate />} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={<PageTemplate />} label="Projects" />
        <NavButton link={<Page_VideoGames/>} label="Video games" />
        <NavButton link={<Page_Books/>} label="Books" />
        <NavButton link={<PageTemplate />} label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
