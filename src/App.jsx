import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useState, useEffect } from "react";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  globalThis.isMobile = isMobile;

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
      globalThis.isMobile = isMobile;
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [isMobile]);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Khalifa Fumo | Portfolio</title>
        <meta property="og:title" content="Khalifa Fumo | Portfolio" />
        <meta
          property="og:description"
          content="Khalifa Fumo's Portfolio Showcase"
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://khalifafumo.me" />
      </Helmet>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero isMobile={isMobile} />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
