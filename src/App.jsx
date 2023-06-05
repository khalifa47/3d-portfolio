import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

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

const App = () => {
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
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <Tech />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
