

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
        subTitle="Your subtitle text goes here"
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
