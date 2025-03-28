import React from "react";
import styles from "./FAQ.module.css";
import NeonEffect from "../../components/NeonEffect/NeonEffect";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Fox Crypto Game?",
      answer:
        "Fox Crypto Game is a play-to-earn blockchain game where players guide a fox to collect cherries and earn $FOXG tokens. It combines fun gameplay with crypto rewards.",
    },
    {
      question: "How do I start playing?",
      answer:
        "To start playing, connect your crypto wallet to our platform, choose your fox character, and dive into the neon forest to collect cherries!",
    },
    {
      question: "What is $FOXG token?",
      answer:
        "$FOXG is the native cryptocurrency of Fox Crypto Game. You can earn it by playing, and use it to upgrade your fox, buy NFTs, and participate in game governance.",
    },
    {
      question: "What are NFT Foxes?",
      answer:
        "NFT Foxes are unique digital characters that you can own. They may have special abilities and can be traded on NFT marketplaces.",
    },
    {
      question: "How do I earn money?",
      answer:
        "You earn money by collecting cherries in the game, which can be converted to $FOXG tokens. You can also earn through daily challenges, leaderboards, and participating in seasonal events.",
    },
    {
      question: "What blockchain is the game on?",
      answer:
        "Fox Crypto Game is initially built on the Solana blockchain and utilizes Layer-2 solutions for faster and cheaper transactions.",
    },
    {
      question: "Where can I buy $FOXG tokens?",
      answer:
        "Currently, $FOXG tokens can be earned by playing the game. Information on where to buy them on exchanges will be announced soon.",
    },
    {
      question: "How can I contact support?",
      answer:
        "For support inquiries, please visit our Discord channel or email our support team at foxgametothemoon@gmail.com.",
    },
  ];

  return (
    <div className={styles.faqPage}>
      <header className={styles.faqHeader}>
        <NeonEffect>
          <h1>Frequently Asked Questions</h1>
        </NeonEffect>
        <p className={styles.faqSubtitle}>
          Everything you need to know about Fox Crypto Game
        </p>
      </header>

      <section className={styles.faqSection}>
        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            <h3 className={styles.faqQuestion}>{faq.question}</h3>
            <p className={styles.faqAnswer}>{faq.answer}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FAQ;
