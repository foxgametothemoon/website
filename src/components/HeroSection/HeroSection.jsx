import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button"; // Assuming Button component is in the same components folder
import wallpaper from "../../assets/wallpaper.jpg"
import copy from "../../assets/copy.svg"

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <p className={styles.heroCA}>Solana CA: fox93H6QKgcyTnUHMRVoV1yN9ayXkK1ibRfDgohx7Gm<img src={copy} alt="Copy icon" style={{ marginTop: "5px", cursor: 'pointer' }} width={30} height={30} onClick={async () => {
          await navigator.clipboard.writeText("fox93H6QKgcyTnUHMRVoV1yN9ayXkK1ibRfDgohx7Gm");
          alert("Copied to clipboard!")
        }} /></p>
        <div className={styles.heroButtons}>
          <Button primary to="https://dexscreener.com/solana/fox93H6QKgcyTnUHMRVoV1yN9ayXkK1ibRfDgohx7Gm" size="large">
            Buy Now
          </Button>
          <Button to="https://solscan.io/token/fox93H6QKgcyTnUHMRVoV1yN9ayXkK1ibRfDgohx7Gm">Solana Scan</Button>
        </div>
      </div>
      <div className={styles.heroImage}>
        {/* Placeholder image - replace with your actual hero image or video */}
        <img src={wallpaper} alt="Game Hero" />
      </div>
    </section>
  );
};

export default HeroSection;
