import React from "react";
import styles from "./GameInfo.module.css";
import Button from "../../components/Button/Button";
import NeonEffect from "../../components/NeonEffect/NeonEffect";
import GamePreview from "../../components/GamePreview/GamePreview";

const GameInfo = () => {
  return (
    <div className={styles.gameInfo}>
      <header className={styles.header}>
        <NeonEffect>
          <h1>Fox & Cherries Game</h1>
        </NeonEffect>
        <p className={styles.subtitle}>A Blockchain Gaming Adventure</p>
      </header>

      <section className={styles.overview}>
        <div className={styles.gameDemo}>
          <GamePreview fullSize />
          <div className={styles.playButtonWrapper}>
            <Button primary to="/play">
              Play Now
            </Button>
          </div>
        </div>
        <div className={styles.gameDescription}>
          <h2>Game Overview</h2>
          <p>
            Fox & Cherries is an innovative HTML5 game built with cutting-edge
            blockchain technology. Guide your fox through neon-lit forests
            collecting digital cherries that convert to real cryptocurrency
            rewards.
          </p>
          <p>
            The game combines classic platformer mechanics with modern
            play-to-earn features, creating a unique gaming experience where
            skill and strategy are rewarded with tangible assets.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>10K+</span>
              <span className={styles.statLabel}>Active Players</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>5M+</span>
              <span className={styles.statLabel}>$CHERRY Earned</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Unique Levels</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.howToPlay}>
        <NeonEffect>
          <h2>How to Play</h2>
        </NeonEffect>
        <div className={styles.instructionsGrid}>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>01</div>
            <h3>Connect Wallet</h3>
            <p>
              Link your crypto wallet to the game to start earning $CHERRY
              tokens.
            </p>
          </div>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>02</div>
            <h3>Choose Your Fox</h3>
            <p>
              Select from standard foxes or purchase special NFT foxes with
              unique abilities.
            </p>
          </div>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>03</div>
            <h3>Collect Cherries</h3>
            <p>
              Navigate through levels collecting cherries while avoiding
              obstacles.
            </p>
          </div>
          <div className={styles.instructionCard}>
            <div className={styles.instructionNumber}>04</div>
            <h3>Earn Rewards</h3>
            <p>
              Convert your in-game cherries to $CHERRY tokens and trade or stake
              them.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.gameFeatures}>
        <h2>Game Features</h2>
        <div className={styles.featuresContainer}>
          <div className={styles.featureItem}>
            <h3>NFT Characters</h3>
            <p>
              Collect special Fox NFTs with unique abilities that give you
              advantages in-game.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Daily Challenges</h3>
            <p>
              Complete special missions each day to earn bonus rewards and rare
              items.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Leaderboards</h3>
            <p>
              Compete with other players worldwide and earn special rewards for
              top rankings.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Upgradable Items</h3>
            <p>
              Use your earnings to upgrade your fox's abilities and unlock new
              areas.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Multiplayer Races</h3>
            <p>
              Challenge other players to head-to-head races on special tracks.
            </p>
          </div>
          <div className={styles.featureItem}>
            <h3>Seasonal Events</h3>
            <p>
              Participate in time-limited events with exclusive rewards and game
              modes.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.technicalSpecs}>
        <h2>Technical Specifications</h2>
        <div className={styles.specsGrid}>
          <div className={styles.specItem}>
            <h3>Platform</h3>
            <p>HTML5, CSS3, JavaScript</p>
          </div>
          <div className={styles.specItem}>
            <h3>Blockchain</h3>
            <p>Ethereum & Layer-2 Solutions</p>
          </div>
          <div className={styles.specItem}>
            <h3>Smart Contracts</h3>
            <p>ERC-20 & ERC-721 Compatible</p>
          </div>
          <div className={styles.specItem}>
            <h3>Wallet Support</h3>
            <p>MetaMask, Trust Wallet, WalletConnect</p>
          </div>
        </div>
      </section>

      <div className={styles.callToAction}>
        <h2>Ready to Start Your Adventure?</h2>
        <Button primary to="/play" size="large">
          Play Now
        </Button>
      </div>
    </div>
  );
};

export default GameInfo;
