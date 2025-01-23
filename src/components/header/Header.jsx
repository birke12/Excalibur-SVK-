import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ headerImg, title, subTitle, textInfo }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subTitle}</h2>
        <div className={styles.infoTextContainer}>
          <p className={styles.infoText}>{textInfo}</p>
        </div>
        <div className={styles.buttonContainer}>
          <a href="/arrangementer">
            <button
              className={styles.infoButton}
              onClick={() => navigate("/arrangementer")}
            >
              Arrangementer
            </button>
          </a>

          <a href="/nyheder">
            <button
              className={styles.infoButton}
              onClick={() => navigate("/nyheder")}
            >
              Nyheder
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  headerImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default Header;
