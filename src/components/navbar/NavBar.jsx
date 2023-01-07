import React from "react";
import NavButton from "./NavButton";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton href=".project.html" label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton href="#projects" label="Projects" />
        <NavButton href="#videogames" label="Video games" />
        <NavButton href="#programing" label="Programing" />
        <NavButton href="#contact" label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
