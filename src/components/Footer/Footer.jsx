import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Fox Crypto Game. All Rights
          Reserved.
        </p>
        <div className={styles.footerLinks}>
          <NavLink to="/privacy" className={styles.footerLink}>
            Privacy Policy
          </NavLink>
          <NavLink to="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
