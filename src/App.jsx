import "./App.css"; 
import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Home2 from "./components/Intro2";





export default function App() {
  return (
    <>
      <div className="App">
        <NavBar/>
        <Intro/>
        <Home2/>
        <Footer/>
        </div>
    </>
  );
}

