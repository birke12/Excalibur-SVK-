import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      {/* Section 1: Short Info */}
      <div className={styles.footerSection}>
        <h2 className={styles.sectionHeader}>Om Excalibur</h2>
        <p className={styles.sectionText}>
          Excalibur er en Dungeons and Dragons rollespils klub, og vores seancer
          tager udgangspunkt i universet bygget op omkring karaktererne og
          klasserne i den verden.
        </p>
        <p className={styles.sectionText}>
          Klubben har netop modtaget et sponsorat fra Viborg kommune, og ønsker
          at bruge pengene på en hjemmeside for klubben.
        </p>
      </div>

      {/* Section 2: Copyright & Legal */}
      <div className={styles.footerSection}>
        <p className={styles.sectionText}>
          © 2025 Excalibur. Alle rettigheder forbeholdes. Registreret i Danmark,
          Undallslund, Skivevej 23 <br></br>CVR: 12345678
        </p>
      </div>

      {/* Section 3: Social Media & Chat */}
      <div className={styles.footerSection}>
        {/* Følg Os Section */}
        <h3 className={styles.followUsHeader}>Følg Os</h3>

        <div className={styles.socialIcons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className={styles.icon} />
          </a>
        </div>

        <div className={styles.chatSection}>
          <p className={styles.sectionText}>Chat med fællesskabet</p>
          <FaCommentDots className={styles.icon} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
