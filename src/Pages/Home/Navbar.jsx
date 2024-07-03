import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className="navbar">
      <div>
        <img src="./img/jenish.png" alt="Jenish" />
      </div>
      <button
        onClick={toggleNav}
        className={`nav__hamburger ${navActive ? "active" : ""}`}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </button>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <NavLink to="/" className="navlink" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/about" className="navlink" onClick={closeMenu}>
          About Me
        </NavLink>
        <NavLink to="/skill" className="navlink" onClick={closeMenu}>
          Skill
        </NavLink>
        <NavLink to="/portfolio" className="navlink" onClick={closeMenu}>
          Portfolio
        </NavLink>
        <NavLink to="/contact" className="navlink" onClick={closeMenu}>
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
