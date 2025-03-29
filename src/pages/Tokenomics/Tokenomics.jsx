import React from "react";
import styles from "./Tokenomics.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const Tokenomics = () => {
  const tokenMetrics = {
    tokenName: "$FOXG",
    totalSupply: "1,000,000,000",
    blockchain: "Solana",
    contractAddress: "mntmgzA6T7AT3xVwPwAm86MVgV2G6W9rEh1E1bXoh3n", // Replace with actual contract address
  };

  const distributionData = [
    { category: "Play-to-Earn Rewards", percentage: "40%" },
    { category: "Community & Marketing", percentage: "20%" },
    { category: "Team & Advisors", percentage: "15%" },
    { category: "Ecosystem Development", percentage: "15%" },
    { category: "Private & Public Sale", percentage: "10%" },
  ];

  const utilityData = [
    "In-game currency for Fox Crypto Game",
    "Upgrade fox characters and purchase NFTs",
    "Participate in governance voting",
    "Staking for rewards",
    "Access to exclusive game features and events",
  ];

  return (
    <div className={styles.tokenomicsPage}>
      <header className={styles.tokenomicsHeader}>
        <NeonEffect>
          <h1>$FOXG Tokenomics</h1>
        </NeonEffect>
        <p className={styles.tokenomicsSubtitle}>
          Understanding Our Token Ecosystem
        </p>
      </header>

      <section className={styles.metricsSection}>
        <NeonEffect>
          <h2>Token Metrics</h2>
        </NeonEffect>
        <div className={styles.metricsGrid}>
          <div className={styles.metricItem}>
            <h3>Token Name</h3>
            <p>{tokenMetrics.tokenName}</p>
          </div>
          <div className={styles.metricItem}>
            <h3>Total Supply</h3>
            <p>
              {tokenMetrics.totalSupply} {tokenMetrics.tokenName}
            </p>
          </div>
          <div className={styles.metricItem}>
            <h3>Blockchain</h3>
            <p>{tokenMetrics.blockchain}</p>
          </div>
          {/* <div className={styles.metricItem}>
            <h3>Contract Address</h3>
            <p className={styles.contractAddress}>
              {tokenMetrics.contractAddress}
            </p>
          </div> */}
        </div>
      </section>

      <section className={styles.distributionSection}>
        <NeonEffect>
          <h2>Token Distribution</h2>
        </NeonEffect>
        <ul className={styles.distributionList}>
          {distributionData.map((item, index) => (
            <li key={index} className={styles.distributionItem}>
              <span>{item.category}</span>
              <span>{item.percentage}</span>
            </li>
          ))}
        </ul>
        {/* You could add a pie chart here for visual representation if you have a charting library */}
      </section>

      <section className={styles.utilitySection}>
        <NeonEffect>
          <h2>Token Utility</h2>
        </NeonEffect>
        <ul className={styles.utilityList}>
          {utilityData.map((utility, index) => (
            <li key={index} className={styles.utilityItem}>
              {utility}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.disclaimerSection}>
        <p className={styles.disclaimerText}>
          <small>
            Disclaimer: $FOXG token and Fox Crypto Game are subject to market
            risks and regulatory changes. Please do your own research before
            participating.
          </small>
        </p>
      </section>
    </div>
  );
};

export default Tokenomics;
