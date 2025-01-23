import PropTypes from "prop-types";
import styles from "./header.module.css";

const Header = ({ headerImg, title, subTitle }) => {
  return (
    <header
      className={styles.header}
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subTitle}</h2>
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
