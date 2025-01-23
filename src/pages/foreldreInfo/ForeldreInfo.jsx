import styles from "./foreldreInfo.module.css";
import imageforeldre from "../../assets/imageforeldre.jpg";
import { MdFamilyRestroom } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import sword from "../../assets/icon.png"

const ForeldreInfo = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        <img
          src={imageforeldre}
          className={styles.headerImage}
          alt="Forældre Info"
        />
        <h1 className={styles.header}>Forældre Info</h1>
      </div>

      <div className={styles.firstContainer}>
        <div className={styles.iconContainer}>
          <div className={styles.decorativeLine}></div>
          <img src={sword} alt="Icon" className={styles.iconImage} />
          <div className={styles.decorativeLine}></div>
        </div>
        <p>
          Når dit barn deltager til Excalibur Rollespil er det ikke meget
          anderledes end hvis du sender dit barn til fodbold eller spejder. Alle
          børn spiller som udgangspunkt på et hold med en voksen holdleder, som
          sørger for at dit barn får en spændende og tryg dag i skoven.
        </p>
        <p>
          Rollespil arrangeres af Excalibur, som er en forening drevet af
          frivillige og entusiastiske rollespillere. Excalibur er medlem af DUF
          igennem Bifrost, som er landsforeningen for kreativ udvikling af børn
          og unge.
        </p>
        <p>Vi arrangerer Rollespil to gange om måneden i Undallslund.</p>
      </div>

      <div className={styles.secondContainer}>
        <div className={styles.card}>
          <div className={styles.ageTag}>8+</div>
          <h2>Aldersgrænse</h2>
          <p>
            Som udgangspunkt er spillere i alle aldre velkomne. Vores rollespil
            sigter dog imod børn og unge i alderen 8-13 år.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconAndTitle}>
            <div className={styles.iconWrapper}>
              <MdFamilyRestroom size={20} />
            </div>
            <h2>Forældre må gerne spille med</h2>
          </div>
          <p>
            Vi ser meget gerne at forældre deltager til Rollespil sammen med
            deres børn. Det er en rigtig sjov måde at være sammen med sit barn
            på og de elsker at se mor eller far blive sminket som ork.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconAndTitle}>
            <div className={styles.iconWrapper}>
              <CiFacebook size={50} />
            </div>
            <h2>Facebookgruppe</h2>
          </div>
          <p>
            Efterhånden har vi mange forældre, der har været med i nogle år og
            som ofte giver en hånd med det praktiske og som sørger for kaffe og
            kakao til gamle sjæle i skoven.
          </p>
          <p>Entusiastiske forældre mødes på facebookgruppen:</p>
          <p className={styles.cardP}>
            Excalibur afviklere, forældre og kreative hjælpere
          </p>
        </div>
      </div>

      <div className={styles.thirdContainer}>
        <div className={styles.leftCard}>
          <h2>Hvis noget går galt, så fortæl os det!</h2>
          <p>
            Vi laver rollespil med hundredevis af børn, og nogle gange går noget
            galt. Der er børn, der bliver uvenner, børn der bliver kede af det
            eller børn som har en uheldig oplevelse. Vi fanger langt det meste i
            skoven, men der sker stadig nogle gange ting vi ikke hører om
            derude. Så hvis du får et barn hjem, som har haft en uheldig
            oplevelse, så fortæl os det! Ellers finder vi aldrig ud af det, og
            selvom der er nogle ting vi ikke kan gøre noget ved, så er der også
            ting vi KAN gøre noget ved.
          </p>
          <p>
            Vores mål er at give børnene en god oplevelse og feedback fra
            forældre er derfor uvurderligt. Tøv derfor ikke med at kontakte os,
            også hvis du “bare” har spørgsmål.
          </p>
          <p>
            Du kan finde telefonnumre og mail-adresser på foreningens afviklere
            under Kontakt.
          </p>
        </div>

        <div className={styles.rightCards}>
          <div className={styles.smallCard}>
            <h2>Ingen mødepligt</h2>
            <p>
              Når man deltager til Rollespil er man ikke forpligtet til at møde
              op til samtlige spildage. Alle er velkomne – også bare for en
              enkelt gang.
            </p>
          </div>
          <div className={styles.smallCard}>
            <h2>Vind og vejr</h2>
            <p>
              Man kan spille rollespil i al slags vejr og vi lader ikke en smule
              sne eller regn stoppe os. Hvis det regner meget kan vi dog godt
              finde på at slutte tidligere end normalt. I så fald vil vi hvis
              det er muligt annoncere det ved check-in inden spilstart.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeldreInfo;
