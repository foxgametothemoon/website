import React, { useEffect } from "react";
import styles from "./PlayGame.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const PlayGame = () => {
  const gameURL = "https://himanshu495-rada.github.io/fox-game/games/game.html"; // Replace with your actual game URL

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
        <a href={gameURL} target="_blank" rel="noopener noreferrer">
          Play Game Now
        </a>
      </p>
    </div>
  );
};

export default PlayGame;
