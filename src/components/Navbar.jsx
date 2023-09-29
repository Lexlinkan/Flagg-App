import React from "react";
import "./Navbar.css";
import logo from '../assets/techover-logo.png'
import logoDark from "../assets/techover-logo-dark.png";
import moon from "../assets/moon-bordered.svg";
import darkMoon from "../assets/moon.svg";

export default function Navbar({ toggleDarkMode, isDarkMode }) {
  return (
    <div className={`Navbar ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h3>The Flagg App</h3>
      <img
        className="logo"
        src={isDarkMode ? logo : logoDark }
        alt="Techover"
        width="184"
      />
      <div className="darkMode" onClick={toggleDarkMode} >
        <img className="moon" onClick={toggleDarkMode} src={isDarkMode ? darkMoon : moon} alt="moon" />
        <h3 className="darkmode" onClick={toggleDarkMode}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </h3>
      </div>
    </div>
  );
}
