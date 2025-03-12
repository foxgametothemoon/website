import React from "react";
import styles from "./Team.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const Team = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      photo: "/images/team/john-doe.jpg", // Placeholder image path
      bio: "Visionary leader with a passion for blockchain and gaming. Over 15 years of experience in tech startups and project management.",
    },
    {
      name: "Jane Smith",
      role: "Lead Developer",
      photo: "/images/team/jane-smith.jpg", // Placeholder image path
      bio: "Expert in blockchain development and cybersecurity. Architect of the Fox Crypto Game smart contracts and game engine.",
    },
    {
      name: "Alex Rios",
      role: "Creative Director",
      photo: "/images/team/alex-rios.jpg", // Placeholder image path
      bio: "Award-winning game designer and artist. Responsible for the immersive neon world and engaging gameplay of Fox Crypto Game.",
    },
    {
      name: "Priya Patel",
      role: "Marketing Lead",
      photo: "/images/team/priya-patel.jpg", // Placeholder image path
      bio: "Seasoned marketing strategist with a focus on crypto and gaming communities. Drives community growth and brand awareness.",
    },
    {
      name: "Kenji Tanaka",
      role: "Community Manager",
      photo: "/images/team/kenji-tanaka.jpg", // Placeholder image path
      bio: "Dedicated community builder and player advocate. Manages community engagement, support, and social media channels.",
    },
    {
      name: "Elena Garcia",
      role: "Financial Advisor",
      photo: "/images/team/elena-garcia.jpg", // Placeholder image path
      bio: "Financial expert specializing in crypto economics and investment strategies. Advises on tokenomics and financial sustainability.",
    },
  ];

  return (
    <div className={styles.teamPage}>
      <header className={styles.teamHeader}>
        <NeonEffect>
          <h1>Meet Our Team</h1>
        </NeonEffect>
        <p className={styles.teamSubtitle}>The minds behind Fox Crypto Game</p>
      </header>

      <section className={styles.teamSection}>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.memberCard}>
              <div className={styles.memberPhoto}>
                <img src={member.photo} alt={member.name} />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
