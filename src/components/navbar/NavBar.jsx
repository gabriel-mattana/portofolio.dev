import React from "react";
import NavItem from "./NavItem";
import NavBrand from "./NavBrand";
import "./NavBar.css";

function NavBar() {
  return (
    <table id="navbar">
      <tbody>
        <tr>
          <NavBrand title="Gabriel Mattana" />

          <NavItem href="#home" label="Home" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#videogames" label="Video games" />
          <NavItem href="#programing" label="Programing" />
          <NavItem href="#contact" label="Contact" />
        </tr>
      </tbody>
    </table>
  );
}

export default NavBar;
