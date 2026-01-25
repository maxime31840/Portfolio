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
      </Routes>
      <Footer />
    </div>
  );
}

