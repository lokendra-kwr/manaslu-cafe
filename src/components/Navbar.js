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
            <div className="flex items-center space-x-2 sm:space-x-3">
              <img 
                src="/logo1.png" 
                alt="Manaslu Cafe Logo" 
                className={`rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'h-8 w-auto sm:h-10' 
                    : 'h-10 w-auto sm:h-12'
                }`}
              />
              <div className="hidden sm:block">
                <h1 className={`font-bold transition-all duration-300 ${
                  isScrolled ? 'text-base sm:text-lg text-gray-800' : 'text-lg sm:text-xl text-gray-800'
                }`}>
                  Manaslu Cafe
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
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 focus:outline-none p-2"
              aria-label="Toggle mobile menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <div className="menu-mobile">
            <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-6 sm:pb-8 space-y-4">

              {/* Mobile Navigation */}
              <nav className="space-y-1" role="navigation" aria-label="Mobile navigation">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-sm sm:text-base"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-sm sm:text-base"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 sm:px-4 py-2 sm:py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium text-sm sm:text-base"
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
