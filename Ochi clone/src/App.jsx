import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Ready from "./Components/Ready";
import Eyepage from "./Components/Eyepage";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full bg-[#f1f1f1] h-screen text-black">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyepage />
      <Featured />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
};

export default App;
