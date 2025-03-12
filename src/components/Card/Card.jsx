import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, content, icon }) => {
  return (
    <div className={styles.card}>
      {icon && (
        <div className={styles.icon}>
          {/* You can add icon component here if needed */}
        </div>
      )}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardContent}>{content}</p>
    </div>
  );
};

export default Card;
