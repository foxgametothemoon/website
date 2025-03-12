import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span className={styles.neonSpan}></span>
        <span className={styles.neonSpan}></span>
        <span className={styles.neonSpan}></span>
        <span className={styles.neonSpan}></span>
      </div>
    </div>
  );
};

export default Loader;
