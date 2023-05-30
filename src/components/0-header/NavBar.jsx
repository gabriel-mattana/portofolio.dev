import React from "react";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <header>
      <div className="navbrand">
        <NavButton link={"introduction"} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={"videogames"} label="Video games" />
        <NavButton link={"books"} label="Books" />
        <NavButton link={"contact"} label="Contact" />
      </div>
    </header>
  );
}

export default NavBar;
