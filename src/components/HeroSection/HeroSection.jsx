import React from "react";
import styles from "./HeroSection.module.css";
import Button from "../Button/Button"; // Assuming Button component is in the same components folder
import wallpaper from "../../assets/wallpaper.jpg"

const HeroSection = ({ title, subtitle }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>{title}</h1>
        <p className={styles.heroSubtitle}>{subtitle}</p>
        <div className={styles.heroButtons}>
          <Button primary to="https://game.foxgame.space/" size="large">
            Play Now
          </Button>
          <Button to="/game-info">Learn More</Button>
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
