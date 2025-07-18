import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      {/* Navbar visibile su tutte le pagine */}
      <Navbar />

      {/* Sezione Hero visibile solo sulla homepage */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chi-siamo" element={<About />} />
        <Route path="/servizi" element={<Services />} />
        <Route path="/contatti" element={<Contact />} />
      </Routes>

      {/* Footer visibile su tutte le pagine */}
      <Footer />
    </>
  );
};

export default App;
