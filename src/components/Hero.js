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
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-5 md:mb-6 font-serif leading-tight px-2">
          <span className="text-cafe-gold">Manaslu</span> Cafe
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-5 md:mb-8 text-cafe-cream font-light px-2">
        "𝘉𝘳𝘰𝘶𝘨𝘩𝘵 𝘵𝘰 𝘺𝘰𝘶 𝘢𝘯 𝘰𝘳𝘨𝘢𝘯𝘪𝘤 𝘵𝘢𝘴𝘵𝘦 𝘰𝘧 𝘏𝘪𝘮𝘢𝘭𝘢𝘺𝘢🏔 𝘧𝘳𝘰𝘮 𝘦𝘢𝘴𝘵 𝘵𝘰 𝘸𝘦𝘴𝘵, 𝘯𝘰𝘸 𝘪𝘯 𝘺𝘰𝘶𝘳 𝘵𝘰𝘸𝘯(𝘕𝘠𝘊)"
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
          We specialize in bringing prime breakfasts, tasty lunches, and delicious dinners 
          using only the freshest organic ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <button
            onClick={() => scrollToSection('menu')}
            className="btn-primary w-full sm:w-auto min-w-[140px] min-h-[44px] touch-manipulation text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4"
            aria-label="View our menu"
          >
            View Menu
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white border-2 border-white hover:bg-white hover:text-cafe-brown active:bg-white/20 transition-all duration-300 rounded-lg w-full sm:w-auto min-w-[140px] min-h-[44px] touch-manipulation text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 font-medium"
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
