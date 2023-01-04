import React from "react";
import NavItem from "./NavItem";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavItem href=".project.html" label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavItem href="#projects" label="Projects" />
        <NavItem href="#videogames" label="Video games" />
        <NavItem href="#programing" label="Programing" />
        <NavItem href="#contact" label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
