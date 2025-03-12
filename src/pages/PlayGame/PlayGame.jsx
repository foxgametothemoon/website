import React, { useEffect } from "react";
import styles from "./PlayGame.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";
import { Link } from "react-router-dom";

const PlayGame = () => {
  const gameURL = "https://foxgametothemoon.github.io/game/"; // Replace with your actual game URL

  useEffect(() => {
    window.location.href = gameURL;
  }, [gameURL]);

  return (
    <div className={styles.playGamePage}>
      <NeonEffect>
        <h1>Redirecting to Game...</h1>
      </NeonEffect>
      <p className={styles.redirectMessage}>
        You are now being redirected to the game. If you are not redirected
        automatically, please click the link below:
      </p>
      <p className={styles.fallbackLink}>
        <Link to={gameURL} target="_blank" >
          Play Game Now
        </Link>
      </p>
    </div>
  );
};

export default PlayGame;
