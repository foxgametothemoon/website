import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/logo.jpg"; // Import your logo
import hamburgerIcon from "../../assets/hamberger.svg"; // Import the SVG file

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="Fox Crypto Game Logo" />
        </NavLink>

        {/* Hamburger Button for Mobile */}
        <div
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          <img src={hamburgerIcon} alt="Menu" />
        </div>

        {/* Navigation Links */}
        <nav
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.navLinksOpen : ""
          }`}
        >
          <NavLink
            to="/"
            className={styles.navLink}
            end
            onClick={toggleMobileMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/game-info"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            Game Info
          </NavLink>
          <NavLink
            to="/tokenomics"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            Tokenomics
          </NavLink>
          <NavLink
            to="/roadmap"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            Roadmap
          </NavLink>
          {/* <NavLink
            to="/team"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            Team
          </NavLink> */}
          <a
            href="/assets/litepaper.pdf"
            className={styles.navLink}
            onClick={toggleMobileMenu}
            download
          >
            LitePaper
          </a>
          <NavLink
            to="/faq"
            className={styles.navLink}
            onClick={toggleMobileMenu}
          >
            FAQ
          </NavLink>
          <NavLink
            to="https://game.foxgame.space/"
            className={`${styles.navLink} ${styles.playButton}`}
            onClick={toggleMobileMenu}
          >
            Play Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
