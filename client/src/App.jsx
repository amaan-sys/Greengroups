import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./Pages/AboutUs";
import Footer from "./components/Footer";
import WhyUs from "./Pages/WhyUs"

function App() {
  return (
    <Router>
      <Navbar />

      {/* ROUTES SHOULD DECIDE WHAT PAGE TO SHOW */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/whyus" element={<WhyUs />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
