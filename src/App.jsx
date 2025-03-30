import {
  HashRouter as Router,
  Routes,
  Navigate,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./comps/Header";
import Mainpage from "./comps/Mainpage";
import Prices from "./comps/Prices";
import News from "./comps/News";
import Contacts from "./comps/Contacts";
import About from "./comps/About";
import Footer from "./comps/Footer";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;


