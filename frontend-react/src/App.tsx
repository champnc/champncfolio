import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import {
  AboutMeSection,
  ContactSection,
  EducationSection,
  ExperianceSection,
  WorkSection,
} from "./pages";

function App() {
  return (
    <div className="App">
      {/* <Helmet>
        <title>Champnc</title>
        <meta name="description" content="champncfolio application" />
      </Helmet> */}
      <Navbar />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
