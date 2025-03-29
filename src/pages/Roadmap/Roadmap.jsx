import React from "react";
import styles from "./Roadmap.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "Q2 2025",
      title: "Initial Launch",
      tasks: [
        "Website & Initial Launch",
        "Token Generation Event ($FOXG)",
        "Smart Contract Deployment",
        "Airdrop & Referral Campaign",
      ],
    },
    {
      quarter: "Q3 2025",
      title: "Development Phase",
      tasks: [
        "Beta Game Release",
        "NFT Collection Launch",
        "Staking & Reward Machnism Activation",
        "Initial CEX/DEX Listings",
      ],
    },
    {
      quarter: "Q4 2025",
      title: "Growth & Expansion",
      tasks: [
        "Full Game Release",
        "Partnership Announcements",
        "Marketing & Community Expansion",
        "Cross-Chain Integration Exploration",
      ],
    },
    {
      quarter: "Q1 2026",
      title: "Scaling UP",
      tasks: [
        "Esports & Competitive Gaming Features",
        "DAO Governance Launch",
        "Mobile App Release",
        "Further Exchange Listings",
      ],
    },
    // {
    //   quarter: "Q1 2026",
    //   title: "Multiplayer & Metaverse Integration",
    //   tasks: [
    //     "Launch of multiplayer game mode (races, battles)",
    //     "Metaverse integration and virtual land exploration",
    //     "Mobile game version development",
    //     "Esports and competitive gaming initiatives",
    //   ],
    // },
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
