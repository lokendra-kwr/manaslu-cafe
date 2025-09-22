import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/manaslu-region.jpg')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 font-serif leading-tight">
          <span className="text-cafe-gold">Manaslu</span> Cafe
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-cafe-cream font-light">
          Fresh, Quality Food from the Heart of Kathmandu
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          We specialize in bringing prime breakfasts, tasty lunches, and delicious dinners 
          using only the freshest ingredients sourced within the Kathmandu Valley.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white border-2 border-white hover:bg-white hover:text-cafe-brown transition-all duration-300 rounded-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
          >
            Visit Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
