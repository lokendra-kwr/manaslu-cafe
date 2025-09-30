import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* Skip Navigation Link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cafe-brown text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-cafe-gold"
      >
        Skip to main content
      </a>
      
      <Navbar />
      <main id="main-content">
        <Hero />
        <Menu />
        <Gallery />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
