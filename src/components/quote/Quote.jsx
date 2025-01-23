import React, { useEffect, useRef } from "react";
import styles from "./quote.module.css";

const Quote = ({ text, author }) => {
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            entry.target.classList.remove(styles.hidden);
          } else {
            entry.target.classList.remove(styles.visible);
            entry.target.classList.add(styles.hidden);
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
        rootMargin: "-10% 0px -10% 0px",
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.quoteContainer}>
      <div ref={quoteRef} className={`${styles.quoteBox} ${styles.hidden}`}>
        <p className={styles.quoteText}>"{text}"</p>
        <p className={styles.quoteAuthor}>- {author}</p>
      </div>
    </div>
  );
};

export default Quote;
