import React from "react";
import styles from "./Roadmap.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q1 2024",
      title: "Foundation & Game Development",
      tasks: [
        "Project concept finalization",
        "Core game mechanics development",
        "Team formation and initial funding",
        "Website and basic UI design",
      ],
    },
    {
      quarter: "Q2 2024",
      title: "Private Testing & Token Launch",
      tasks: [
        "Private alpha testing of the game",
        "$CHERRY token smart contract development",
        "Token private sale and initial DEX offering (IDO)",
        "Community building and marketing ramp-up",
      ],
    },
    {
      quarter: "Q3 2024",
      title: "Public Game Launch & NFT Release",
      tasks: [
        "Public launch of Fox Crypto Game (Beta)",
        "Release of Genesis NFT Fox collection",
        "Play-to-earn mechanics implementation",
        "Community governance setup",
      ],
    },
    {
      quarter: "Q4 2024",
      title: "Expansion & Features Enhancement",
      tasks: [
        "Game expansion with new levels and challenges",
        "Implementation of NFT marketplace",
        "Introduction of daily quests and leaderboards",
        "Partnerships and cross-promotions",
      ],
    },
    {
      quarter: "Q1 2025",
      title: "Multiplayer & Metaverse Integration",
      tasks: [
        "Launch of multiplayer game mode (races, battles)",
        "Metaverse integration and virtual land exploration",
        "Mobile game version development",
        "Esports and competitive gaming initiatives",
      ],
    },
  ];

  return (
    <div className={styles.roadmapPage}>
      <header className={styles.roadmapHeader}>
        <NeonEffect>
          <h1>Project Roadmap</h1>
        </NeonEffect>
        <p className={styles.roadmapSubtitle}>Our Journey Ahead</p>
      </header>

      <section className={styles.roadmapTimeline}>
        {roadmapData.map((quarterData, index) => (
          <div key={index} className={styles.quarter}>
            <div className={styles.quarterHeader}>
              <NeonEffect>
                <h3>{quarterData.quarter}</h3>
              </NeonEffect>
            </div>
            <div className={styles.quarterContent}>
              <h4>{quarterData.title}</h4>
              <ul className={styles.taskList}>
                {quarterData.tasks.map((task, taskIndex) => (
                  <li key={taskIndex} className={styles.taskItem}>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Roadmap;
