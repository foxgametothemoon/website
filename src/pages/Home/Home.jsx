import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import HeroSection from "../../components/HeroSection/HeroSection";
import GamePreview from "../../components/GamePreview/GamePreview";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import NeonEffect from "../../components/NeonEffect/NeonEffect";
import CryptoWidget from "../../components/CryptoWidget/CryptoWidget";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`${styles.home} ${isLoaded ? styles.loaded : ""}`}>
      <HeroSection
        title="Fox Crypto Game"
        subtitle="A Futuristic Gaming Experience on the Blockchain"
      />

      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <NeonEffect>
            <h2>Enter the Neon Forest</h2>
          </NeonEffect>
          <p>
            Join our fox on an epic journey collecting digital cherries in a
            world where gaming meets blockchain technology. Experience the
            future of gaming with our innovative play-to-earn mechanics.
          </p>
          <div className={styles.cta}>
            <Button primary to="/play">
              Play Now
            </Button>
            <Button to="/tokenomics">Explore Tokenomics</Button>
          </div>
        </div>
        <div className={styles.introImage}>
          <GamePreview />
        </div>
      </section>

      <section className={styles.featuresSection}>
        <NeonEffect>
          <h2>Game Features</h2>
        </NeonEffect>
        <div className={styles.featuresGrid}>
          <Card
            title="Play to Earn"
            icon="coins"
            content="Collect cherries and earn real crypto tokens that can be traded or staked."
          />
          <Card
            title="NFT Characters"
            icon="fox"
            content="Unique fox characters with special abilities are available as NFTs."
          />
          <Card
            title="Daily Challenges"
            icon="trophy"
            content="Complete daily missions to earn bonus rewards and rare items."
          />
          <Card
            title="Community Governance"
            icon="users"
            content="Vote on future game developments and token economics."
          />
        </div>
      </section>

      <section className={styles.tokenSection}>
        <div className={styles.tokenInfo}>
          <NeonEffect>
            <h2>$FOX GAME Token</h2>
          </NeonEffect>
          <p>
            Our native cryptocurrency powers the entire ecosystem. Use $CHERRY
            to upgrade your fox, buy special items, and participate in
            governance.
          </p>
          <Button to="/tokenomics">Token Details</Button>
        </div>
        <div className={styles.tokenWidget}>
          <CryptoWidget />
        </div>
      </section>

      <section className={styles.communitySection}>
        <NeonEffect>
          <h2>Join Our Community</h2>
        </NeonEffect>
        <p>
          Connect with fellow players, get the latest updates, and participate
          in exclusive events.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://discord.gg/foxcrypto"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Discord
          </a>
          <a
            href="https://x.com/FOXGAME2025"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Twitter
          </a>
          <a
            href="https://t.me/foxcryptogame"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            Telegram
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
