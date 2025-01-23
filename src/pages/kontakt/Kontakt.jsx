
import styles from "./kontakt.module.css";
import {
  FaUserAlt,
  FaRegNewspaper,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


const Kontakt = () => {
  return (
    <div className={styles.kontaktContainer}>
      <h2 className={styles.header}>Kontakt</h2>
      <p className={styles.text}>
        Har du spørgsmål? Vi er her for at hjælpe. Kontakt os for kundesupport,
        presse- og mediekontakter eller vores adresse og telefonnummer.
      </p>

      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaUserAlt size={40} />
          </div>
          <h3>Kundesupport</h3>
          <p>
            Har du spørgsmål angående vores aktiviteter? Vores team er klar til
            at hjælpe dig.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaRegNewspaper size={40} />
          </div>
          <h3>Presse- og mediekontakter</h3>
          <p>
            For presseforespørgsler eller samarbejdsmuligheder, kontakt vores PR
            afdeling.
          </p>
          <p>
            <FaPhoneAlt
              size={10}
              style={{ marginRight: "5px", color: "#c9a76b " }}
            />
            <a href="tel:+4512345678">+45 12 34 56 78</a>
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaPhoneAlt size={30} />
          </div>
          <h3>Adresse og telefonnummer</h3>
          <p>
            Besøg os på vores kontor, eller ring til os. Vi glæder os til at
            høre fra dig.
          </p>
          <p style={{ fontSize:"10px", color: "#c9a76b" }}>
            <FaMapMarkerAlt
              size={12}
              style={{ marginRight: "5px", color: "#c9a76b" }}
            />
            Skivevej 23, Undallslund, Danmark
          </p>

          <p>
            <FaPhoneAlt
              size={10}
              style={{ marginRight: "5px", color: "#c9a76b " }}
            />
            <a href="tel:+4512345678">+45 12 34 56 78</a>
          </p>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d35271.68500104465!2d9.370546811064923!3d56.45948600814999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464be408fd3670c3%3A0x7a981e5e9d41fc14!2sViborg%20Orienteringsklub!5e0!3m2!1sda!2sdk!4v1737365943616!5m2!1sda!2sdk"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map to Skivevej 93, Viborg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
