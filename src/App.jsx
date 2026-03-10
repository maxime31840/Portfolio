import "./App.css"; 
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Home2 from "./components/Intro2";
import About from "./components/about/About";
import Projet from "./components/Projet/Projet";
import Contact from "./components/Contact/Contact";
import Epreuve from "./components/EpreuveE5";
import Ecole from "./components/Ecole";
import Veille from "./components/Veille";
import VeilleDetail1 from "./components/VeilleDetail1";
import VeilleDetail2 from "./components/VeilleDetail2";
import VeilleDetail3 from "./components/VeilleDetail3";

export default function App() {
  return (
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<><Intro /><Home2 /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Epreuve" element={<Epreuve />} />
        <Route path="/Ecole" element={<Ecole />} />
        <Route path="/Veille" element={<Veille />} />
        <Route path="/Veille/algorithmes-recommandation" element={<VeilleDetail1 />} />
        <Route path="/Veille/ia-generative" element={<VeilleDetail2 />} />
        <Route path="/Veille/cybersecurite-pme" element={<VeilleDetail3 />} />
      </Routes>
      <Footer />
    </div>
  );
}
