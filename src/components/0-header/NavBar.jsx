import React from "react";
import NavButton from "./NavButton";
import CollectionPresenter from "../1-body/displayers/CollectionPresenter";
import "./NavBar.css";

import { videoGames } from "../1-body/data";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton link={<CollectionPresenter />} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={<CollectionPresenter />} label="Projects" />
        <NavButton link={<CollectionPresenter content={videoGames}/>} label="Video games" />
        <NavButton link={<CollectionPresenter />} label="Programming" />
        <NavButton link={<CollectionPresenter />} label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
