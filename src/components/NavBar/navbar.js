import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

  const closeMenu = () => {
    setShowMenu(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="abouts"
          spy={true}
          smooth={true}
          offset={+10}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={+10}
          duration={500}
          className="desktopMenuListItem"
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={+9}
          duration={500}
          className="desktopMenuListItem"
        >
          Skılls
        </Link>
      </div>
      <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
          closeMenu();
        }}
      >
        Contact Me
      </button>

      <img
        src={menu}
        alt="Menu"
        className="mobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div ref={menuRef} className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={closeMenu}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="abouts"
          spy={true}
          smooth={true}
          offset={+10}
          duration={500}
          className="ListItem"
          onClick={closeMenu}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={+10}
          duration={500}
          className="ListItem"
          onClick={closeMenu}
        >
          Projects
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={+10}
          duration={500}
          className="ListItem"
          onClick={closeMenu}
        >
          Skılls
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
