import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-mobile-screen flex items-center justify-center" role="banner">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/maxresdefault.jpg')"
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-responsive-xl font-bold mb-3 sm:mb-4 md:mb-6 font-serif leading-tight">
          <span className="text-cafe-gold">Manaslu</span> Cafe
        </h1>
        <p className="text-responsive-lg mb-4 sm:mb-6 md:mb-8 text-cafe-cream font-light">
          Fresh, Quality Food from the Heart of Kathmandu
        </p>
        <p className="text-responsive-base mb-6 sm:mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          We specialize in bringing prime breakfasts, tasty lunches, and delicious dinners 
          using only the freshest ingredients sourced within the Kathmandu Valley.
        </p>
        <div className="btn-group-mobile justify-center">
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary w-mobile-full"
            aria-label="View our menu"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white border-2 border-white hover:bg-white hover:text-cafe-brown transition-all duration-300 rounded-lg w-mobile-full"
            aria-label="Visit our cafe"
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
