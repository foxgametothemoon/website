import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../../assets/react.svg"; // Import your logo

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo}>
          <img src={logo} alt="Fox Crypto Game Logo" />
        </NavLink>
        <nav className={styles.navLinks}>
          <NavLink to="/" className={styles.navLink} end>
            Home
          </NavLink>
          <NavLink to="/game-info" className={styles.navLink}>
            Game Info
          </NavLink>
          <NavLink to="/tokenomics" className={styles.navLink}>
            Tokenomics
          </NavLink>
          <NavLink to="/roadmap" className={styles.navLink}>
            Roadmap
          </NavLink>
          <NavLink to="/team" className={styles.navLink}>
            Team
          </NavLink>
          <NavLink to="/faq" className={styles.navLink}>
            FAQ
          </NavLink>
          <NavLink
            to="/play"
            className={`${styles.navLink} ${styles.playButton}`}
          >
            Play Now
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
