import { useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Arrangementer from "./pages/arrangementer/Arrangementer";
import Home from "./pages/Home";
import Footer from "./components/footer/footer";
import BlivMedlem from "./pages/blivMedlem/BlivMedlem";
import Galleri from "./pages/galleri/Galleri";
import Nyheder from "./pages/nyheder/Nyheder";
import ForeldreInfo from "./pages/foreldreInfo/ForeldreInfo";
import Kontakt from "./pages/kontakt/Kontakt";
import "./App.css";

const App = () => {
  // Define routes using `useRoutes`
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/arrangementer", element: <Arrangementer /> },
    { path: "/blivMedlem", element: <BlivMedlem /> },
    { path: "/galleri", element: <Galleri /> },
    { path: "/nyheder", element: <Nyheder /> },
    { path: "/foraeldre-info", element: <ForeldreInfo /> },
    { path: "/kontakt", element: <Kontakt /> },
  ]);

  return (
    <>
      <Navigation />
      <div className="app">
        {/* Render routes */}
        
        <div className="content">{routes}</div>
      </div>
      <Footer />
    </>
  );
};

export default App;
