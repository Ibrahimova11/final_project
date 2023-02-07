import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import "./App.css";
import About from "./Pages/About";
import Gallery from "./Pages/Gallery";
import Destinations from "./Pages/Destinations"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/destinations" element={<Destinations/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
