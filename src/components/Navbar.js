import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };


  return (
    <nav className={`nav-mobile ${
      isScrolled 
        ? 'bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-md shadow-lg py-2 sm:py-3' 
        : 'bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm py-3 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <img 
                src="/final logo yho.png" 
                alt="Manaslu Cafe Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain mr-1 sm:mr-2 relative z-10"
                style={{ 
                  filter: 'brightness(0)',
                  backgroundColor: 'transparent'
                }}
              />
              <div className="hidden sm:block">
                <h1 className={`font-bold transition-all duration-300 ${
                  isScrolled ? 'text-base sm:text-lg text-gray-800' : 'text-lg sm:text-xl text-gray-800'
                }`}>
                  <span 
                    style={{
                      background: 'linear-gradient(to bottom, rgba(70, 120, 160, 1), rgba(60, 60, 60, 1))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Manaslu
                  </span>
                  {' '}Cafe
                </h1>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 font-medium text-sm relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-brown transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 font-medium text-sm relative group"
            >
              Menu
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-brown transition-all duration-200 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 font-medium text-sm relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cafe-brown transition-all duration-200 group-hover:w-full"></span>
            </button>

          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 focus:outline-none p-2 sm:p-3 touch-manipulation"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="menu-mobile animate-slideDown">
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 space-y-3 sm:space-y-4">

              {/* Mobile Navigation */}
              <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block px-4 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-cafe-brown active:bg-gray-100 hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-base sm:text-lg touch-manipulation min-h-[44px]"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="block px-4 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-cafe-brown active:bg-gray-100 hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-base sm:text-lg touch-manipulation min-h-[44px]"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-4 sm:px-5 py-3 sm:py-4 text-gray-700 hover:text-cafe-brown active:bg-gray-100 hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-base sm:text-lg touch-manipulation min-h-[44px]"
                >
                  Contact
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
