import React from "react";
import styles from "./GamePreview.module.css";

const GamePreview = ({ fullSize = false }) => {
  const previewClass = fullSize ? styles.gamePreviewFull : styles.gamePreview;

  return (
    <div className={previewClass}>
      {/* Placeholder for game preview - replace with actual video or GIF embed or image */}
      {/* <img
        src="/images/game-preview-placeholder.gif" // Or a static image like game-preview-placeholder.png
        alt="Game Preview"
      /> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/PHskP9wglJ8?si=7UqFETVY1W5p3kY3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <iframe width="100%" height="315" src="https://www.youtube.com/embed/G0DfDJ3k6n8?si=wVv9EqGpokxT5Mp2" title="Neon Forest Runner" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default GamePreview;
