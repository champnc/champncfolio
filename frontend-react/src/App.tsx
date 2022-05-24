import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AboutMeSection } from "./pages/AboutMeSection";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Champnc</title>
        <meta name="description" content="champncfolio application" />
      </Helmet>
      <Navbar />
      <AboutMeSection/>
      <Footer />
    </div>
  );
}

export default App;
