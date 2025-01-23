import React, { useState, useEffect } from "react";
import forestImage from "../../assets/forest.jpg";
import news1 from "../../assets/news10.jpg";
import news2 from "../../assets/news30.jpg";
import news3 from "../../assets/news40.jpg";
import news4 from "../../assets/news50.jpg";
import news11 from "../../assets/news1.jpg";
import news22 from "../../assets/news2.webp";
import news33 from "../../assets/news3.jpg";
import news44 from "../../assets/news4.avif";

import styles from "./nyheder.module.css";

const events = [
  {
    title: "Magiske Kreaturer i Skovens Dybd",
    image: news1,
    description:
      "Oplev fantastiske magiske væsner og hjælp med at redde skovens indbyggere.",
    date: "01. Februar 2025",
  },
  {
    title: "Jagten på den Tabte Krone",
    image: news2,
    description:
      "En farlig mission, hvor du skal finde og bringe den tabte krone tilbage.",
    date: "10. Februar 2025",
  },
  {
    title: "Skovens Hemmelighed",
    image: news3,
    description:
      "Undersøg de mørke hemmeligheder, der lurer i skovens dybeste hjørner.",
    date: "20. Februar 2025",
  },
  {
    title: "Børnenes Forsvar i Slaget",
    image: news4,
    description:
      "Tag del i det spændende slag og hjælp til med at beskytte skovens børn.",
    date: "05. Marts 2025",
  },
];

const Nyheder = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visible after a short delay to trigger the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <img src={forestImage} alt="Skov" className={styles.headerImage} />
        <h1 className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          Kommende Rollespils <br></br>Eventyr i Skovene
        </h1>
      </div>

      <div className={styles.cardsContainer}>
        {events.map((event, index) => (
          <div key={index} className={styles.card}>
            <img
              src={event.image}
              alt={event.title}
              className={styles.cardImage}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{event.title}</h2>
              <p className={styles.cardDescription}>{event.description}</p>
              <p className={styles.eventDate}>{event.date}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.subHeader}>
        <h2>Sommer Nyheder</h2>
      </div>

      <div className={styles.horizontalCardsContainer}>
        {[
          {
            image: news11,
            title: "Eventyr for børn",
            description:
              "Deltag i spændende og sjove eventyr for børnene, hvor magiske skabninger, fantasifulde opgaver og underholdning bringer smilet frem. Gennem leg og fantasi kan børnene udforske deres kreativitet og opbygge nye færdigheder.",
            date: "15. Juni 2025",
            time: "10:00 - 14:00"
          },
          {
            image: news22,
            title: "Voksnes udfordring", 
            description:
              "Oplev spændende opgaver designet specielt til voksne i det mystiske og fortryllende univers, hvor både dine evner, din strategi og dit mod bliver sat på prøve i intense, uforglemmelige eventyr, der kræver skarphed, samarbejde og mental styrke.",
            date: "22. Juni 2025",
            time: "19:00 - 23:00"
          },
          {
            image: news33,
            title: "Familiedag",
            description:
              "En dag fyldt med spænding og glæde for hele familien, hvor samarbejde, leg og eventyr skaber uforglemmelige øjeblikke. Deltag sammen, løs gåder, overvind udfordringer, og del grin og sejre, alt sammen i en magisk atmosfære.",
            date: "29. Juni 2025", 
            time: "11:00 - 16:00"
          },
          {
            image: news44,
            title: "Specialevent",
            description:
              "Et eksklusivt event skabt til grupper og hold, designet til at udfordre deres strategiske evner i intense og spændende omgivelser. Deltagerne får muligheden for at samarbejde, tænke taktisk og løse komplekse opgaver, mens de styrker fællesskab og holdånd.",
            date: "6. Juli 2025",
            time: "13:00 - 17:00"  
          },
        ].map((item, index) => (
          <div key={index} className={styles.horizontalCard}>
            <img
              src={item.image}
              alt={item.title}
              className={styles.horizontalCardImage}
            />
            <div className={styles.horizontalCardContent}>
              <h3 className={styles.horizontalCardTitle}>{item.title}</h3>
              <p className={styles.horizontalCardDescription}>
                {item.description}
              </p>
              <div className={styles.cardFooter}>
                <div className={styles.horizontalCardDateTime}>
                  <p>{item.date}</p>
                  <p>{item.time}</p>
                </div>
                <button className={styles.bookButton}>Tilmeld</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Nyheder;
