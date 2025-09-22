import React from 'react';
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
      <Navbar />
      <Hero />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
