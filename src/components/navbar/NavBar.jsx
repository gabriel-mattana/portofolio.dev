import React from "react";
import NavButton from "./NavButton";
import Page_Home from "../content/pages/Page_Home";
import Page_Project from "../content/pages/Page_Projects";
import Page_VideoGames from "../content/pages/Page_VideoGames";
import Page_Programming from "../content/pages/Page_Programming";
import Page_Contact from "../content/pages/Page_Contact";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton link={<Page_Home />} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={<Page_Project />} label="Projects" />
        <NavButton link={<Page_VideoGames />} label="Video games" />
        <NavButton link={<Page_Programming />}label="Programming" />
        <NavButton link={<Page_Contact />} label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
