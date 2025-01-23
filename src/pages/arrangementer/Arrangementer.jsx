import styles from "./arrangementer.module.css";
import ThorsImage from "../../assets/swordd.png"; // Thors Image
import ArrImage from "../../assets/arrimage.jpg"; // Main Image
import Img1 from "../../assets/img1.jpg"; // Image 1 for the right side
import Img2 from "../../assets/img2.jpg"; // Image 2 for the right side
import Img3 from "../../assets/img3.jpg"; // Image 3 for the right side

const Arrangementer = () => {
  return (
    <div className={styles.arrangementerContainer}>
      <div className={styles.innerContainer}>
        {/* Navigation Image Section */}
        <div className={styles.navigationImage}>
          <img
            src={ThorsImage}
            alt="Thors"
            style={{
              position: "absolute",
              height: "60px",
              marginTop: "-30px",
              background: "#3d2b2b",
              borderRadius: "50px",
            }}
          />
          <span className={styles.arrangementerText}>Arrangementer</span>
        </div>

        {/* Main Section with arrimage.jpg */}
        <div className={styles.arrangementImageContainer}>
          <img
            src={ArrImage}
            alt="Arrangement"
            className={styles.arrangementImage}
          />
        </div>

        {/* Content Section */}
        <div className={styles.mainContent}>
          {/* Left Side: Text Content */}
          <div className={styles.textContainer}>
            <h1>Arrangementer i Undallslund</h1>
            <p>
              Vi spiller i forårssæsonen og efterårssæsonen. Forårssæsonen går
              typisk fra starten af marts til sommerferien, og efterårssæsonen
              går fra sommerferien slutter til det bliver for koldt en gang i
              november. Vi spiller søndage i lige uger – datoer finder du
              herunder.
            </p>
            <p>
              <strong>2025:</strong>
              <br />
              søndag d. 16. marts
              <br />
              søndag d. 30. marts
              <br />
              søndag d. 13. april
              <br />
              søndag d. 27. april
              <br />
              søndag d. 11. maj
              <br />
              søndag d. 31. maj (Aflyser vi)
              <br />
              søndag d. 15. juni
              <br />
              lørdag d. 28. juni (fælles afslutning)
            </p>
            <h2>Tid og sted</h2>
            <p>
              Spillere chekkes ind fra 11.00 til 11:30. Spillet begynder kl.
              12:00, når alle er blevet sminket og klar. Mellem 11.00 og 12.00
              er der mulighed for at lege og slås med nogen af de voksne så man
              ikke skal kede sig. Vi spiser frokost kl. 13:30, så husk madpakke.
              Spillet slutter kl. 15:30 hvor børnene skal afhentes igen.
            </p>
            <h2>Pris</h2>
            <p>
              Det koster 100 kr. at deltage til Rollespil i Undallslund og så
              bliver du også medlem af foreningen Excalibur.
            </p>
            <h3>Sæsonkort</h3>
            <p>
              Man kan til Rollespil i Undallslund købe sæsonkort. Prisen er 100
              kr. + 50 kr. per resterende spilgang i sæsonen. En sæson består
              typisk af 6-7 spilgange.
            </p>
            <h2>Spørgsmål</h2>
            <p>
              Hvis du har spørgsmål, er du velkommen til at e-maile eller ringe
              til os. Kontaktoplysninger findes under Kontakt.
            </p>
          </div>

          {/* Right Side: Images */}
          <div className={styles.imageContainer}>
            <img src={Img1} alt="Feature 1" className={styles.image} />
            <img src={Img2} alt="Feature 2" className={styles.image} />
            <img src={Img3} alt="Feature 3" className={styles.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrangementer;
