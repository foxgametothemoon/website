import React from "react";
import styles from "./GamePreview.module.css";

const GamePreview = ({ fullSize = false }) => {
  const previewClass = fullSize ? styles.gamePreviewFull : styles.gamePreview;

  return (
    <div className={previewClass}>
      {/* Placeholder for game preview - replace with actual video or GIF embed or image */}
      <img
        src="/images/game-preview-placeholder.gif" // Or a static image like game-preview-placeholder.png
        alt="Game Preview"
      />
    </div>
  );
};

export default GamePreview;
