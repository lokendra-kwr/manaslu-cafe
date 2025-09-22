import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Scroll to menu section and trigger search
      scrollToSection('menu');
      // Store search query in sessionStorage for Menu component to use
      sessionStorage.setItem('menuSearchQuery', searchQuery);
      // Trigger a custom event to notify Menu component
      window.dispatchEvent(new CustomEvent('menuSearch', { detail: searchQuery }));
    }
    setIsSearchOpen(false);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-r from-white/95 to-gray-50/95 backdrop-blur-md shadow-lg py-3' 
        : 'bg-gradient-to-r from-white/90 to-gray-50/90 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/maxresdefault.jpg" 
                alt="Manaslu Cafe Logo" 
                className={`rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'h-10 w-auto' 
                    : 'h-12 w-auto'
                }`}
              />
              <div className="hidden sm:block">
                <h1 className={`font-bold transition-all duration-300 ${
                  isScrolled ? 'text-lg text-gray-800' : 'text-xl text-gray-800'
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

            {/* Search Button */}
            <div className="relative">
              <button
                onClick={toggleSearch}
                className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 p-2 rounded-lg hover:bg-gray-100"
                title="Search menu items"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search Dropdown */}
              {isSearchOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50">
                  <form onSubmit={handleSearch} className="px-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search menu items..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-brown focus:border-transparent text-sm"
                        autoFocus
                      />
                      <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <div className="mt-3 flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={toggleSearch}
                        className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1 bg-cafe-brown text-white text-sm rounded-lg hover:bg-cafe-brown/90 transition-colors duration-200"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-cafe-brown transition-colors duration-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 mt-2 rounded-lg shadow-lg mx-2">
            <div className="px-6 pt-6 pb-8 space-y-4">
              {/* Mobile Search */}
              <div className="mb-4">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search menu items..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-brown focus:border-transparent"
                  />
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </form>
              </div>

              {/* Mobile Navigation */}
              <div className="space-y-1">
                <button
                  onClick={() => scrollToSection('home')}
                  className="block px-4 py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="block px-4 py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium"
                >
                  Menu
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-4 py-3 text-gray-700 hover:text-cafe-brown hover:bg-gray-50 rounded-lg w-full text-left transition-all duration-200 font-medium"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
