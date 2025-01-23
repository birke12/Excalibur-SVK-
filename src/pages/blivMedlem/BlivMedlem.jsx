import { useEffect, useRef } from "react";
import styles from "./blivMedlem.module.css"; // Custom CSS for styling
import membershipImage from "../../assets/membership.jpg"; // Image 1
import juniorImage from "../../assets/junior.jpg"; // Image 2
import medlemImage from "../../assets/medlem.jpg"; // Image 3
import { useNavigate } from "react-router-dom"; // If needed

const BlivMedlem = () => {
  const navigate = useNavigate();
  const sectionsRef = useRef([]);

  // Download button handler
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Indmeldingsblanket.docx"; // Path to your file in public directory
    a.download = "Indmeldingsblanket.docx"; // Filename for download
    document.body.appendChild(a);
    a.click(); // Trigger the download click
    document.body.removeChild(a); // Remove the element after clicking
  };

  useEffect(() => {
    // Make a shallow copy of the current sections at the start of the effect
    const currentSections = sectionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { target } = entry;
          if (entry.isIntersecting) {
            target.classList.add(styles.animateText);
          } else {
            target.classList.remove(styles.animateText);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe each section
    currentSections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    // Cleanup function
    return () => {
      currentSections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);


  return (
    <div className={styles.blivMedlemContainer}>
      {/* Header Section */}
      <div className={styles.header}>
        <h1>Bliv Medlem</h1>
      </div>

      {/* Section 1 */}
      <div
        className={styles.section}
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <img
          src={membershipImage}
          alt="Membership Benefits"
          className={styles.image}
        />
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            For at deltage i Excaliburs arrangementer skal man være medlem af
            foreningen. Et medlemskab koster <strong>100 kr/kalenderår</strong>{" "}
            og giver en gratis spilgang til Undallslund plantage, når man melder
            sig ind.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div
        className={styles.section}
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Derfor skal man melde sig ind i Excalibur når man deltager til
            Juniorrollespil. Ude i skoven kan man udfylde en
            <strong> indmeldings-blanket</strong> ved check-in, men for at gøre
            det lettere og hurtigere for jer, har vi lagt indmeldings-blanketten
            online, så man kan downloade den, printe den ud og udfylde den
            hjemmefra. Så går det væsentligt hurtigere derude!
          </p>
        </div>
        <img
          src={juniorImage}
          alt="Junior Rollespil"
          className={styles.image}
        />
      </div>

      {/* Section 3 */}
      <div
        className={styles.section}
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <img src={medlemImage} alt="Medlem" className={styles.image} />
        <div className={styles.sectionContent}>
          <p className={styles.text}>
            Når man bliver medlem af Excalibur bliver man også automatisk medlem
            af rollespillernes landsforening, Bifrost. Du kan læse mere om
            Bifrost og de knapt 50 andre lokalforeninger på landsforeningen »{" "}
            <a
              href="https://bifrost.dk"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              bifrost.dk
            </a>
            .
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className={styles.buttonContainer}>
        <button className={styles.downloadButton} onClick={handleDownload}>
          Download Indmeldings-Blanket
        </button>

        <button
          className={styles.loginButton}
          onClick={() => navigate("/login")}
        >
          Log ind
        </button>
      </div>
    </div>
  );
};

export default BlivMedlem;
