import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Fox Crypto Game. All Rights
          Reserved.
        </p>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy" className={styles.footerLink}>
            Privacy Policy
          </a>
          <a href="/terms-of-service" className={styles.footerLink}>
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
