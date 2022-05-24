import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import {Helmet} from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Champnc</title>
        <meta name="description" content="champncfolio application" />
      </Helmet>
      <Navbar/>
      <h1>Hello world</h1>
      <Footer/>
    </div>
  );
}

export default App;
