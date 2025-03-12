import React from "react";
import styles from "./CryptoWidget.module.css";

const CryptoWidget = () => {
  return (
    <div className={styles.cryptoWidget}>
      <div className={styles.widgetHeader}>
        <span className={styles.cryptoName}>$FOXG</span>
        <span className={styles.cryptoSymbol}>/USD</span>
      </div>
      <div className={styles.priceDisplay}>
        <span className={styles.currentPrice}>$0.1250</span>
        <span className={styles.priceChange}>+2.3%</span>
      </div>
      <div className={styles.marketStats}>
        <div className={styles.stat}>
          <span className={styles.statLabel}>High 24H:</span>
          <span className={styles.statValue}>$0.1285</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statLabel}>Low 24H:</span>
          <span className={styles.statValue}>$0.1220</span>
        </div>
      </div>
    </div>
  );
};

export default CryptoWidget;
