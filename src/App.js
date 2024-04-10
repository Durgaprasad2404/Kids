import "./App.css";
import Art from "./components/Art";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Navbar from "./components/NavBar/Navbar";
import OurAlphas from "./components/OurAlphas";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="">
      <header className="">
        <Navbar />
        <HomePage />
        <OurAlphas />
        <Stories />
        <Art />
        <Contact />
      </header>
    </div>
  );
}

export default App;
