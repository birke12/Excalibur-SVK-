import Knight from "../components/knight/Knight";
import Header from "../components/header/Header";
import headerImg from "../assets/knightwallpaper.png";
import Quote from "../components/quote/Quote";

function Home() {
  return (
    <>
      <Header
        headerImg={headerImg}
        title="Velkommen til Excalibur"
        subTitle="Viborgs største Dungeons and Dragons
klub"
        textInfo="Vi har en masse arrangementer som du kan læse mere om, og du kan også holde dig opdateret omkring vores mange spændende nyheder der løbende vil blive delt her på siden"
      />
      <div className="home-container">
        <div>
          <div style={{ marginTop: "100vh" }}>
            <Quote
              text="In the midst of chaos, there is also opportunity."
              author="Sun Tzu"
            />
          </div>
          <Knight />
        </div>
      </div>
    </>
  );
}

export default Home;
