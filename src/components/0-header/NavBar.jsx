import React from "react";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <nav id="navbar">
      <div  className="navbrand">
        <NavButton link={"introduction"} label="Gabriel Mattana" />
      </div>
      <div className="navbar">
        <NavButton link={"videogames"} label="Video games" />
        <NavButton link={"books"} label="Books" />
        <NavButton link={"contact"} label="Contact" />
      </div>
    </nav>
  );
}

export default NavBar;
