import React, { useState, useMemo, useCallback, useEffect } from 'react';
import menuData from '../data/menuData.json';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    { key: 'breakfast', label: 'Breakfast' },
    { key: 'lunch', label: 'Lunch & Dinner' },
    { key: 'beverages', label: 'Coffee & Tea' },
    { key: 'special', label: 'Our Authentic Food' }
  ];

  // Listen for search queries from navbar
  useEffect(() => {
    const handleMenuSearch = (event) => {
      setSearchQuery(event.detail);
    };

    // Check for search query in sessionStorage on component mount
    const storedQuery = sessionStorage.getItem('menuSearchQuery');
    if (storedQuery) {
      setSearchQuery(storedQuery);
      sessionStorage.removeItem('menuSearchQuery');
    }

    window.addEventListener('menuSearch', handleMenuSearch);
    return () => window.removeEventListener('menuSearch', handleMenuSearch);
  }, []);

  // Get all menu items for cross-category search
  const allMenuItems = useMemo(() => {
    return Object.values(menuData).flat();
  }, []);

  // Get search suggestions based on current query
  const searchSuggestions = useMemo(() => {
    if (!searchQuery.trim() || searchQuery.length < 2) return [];
    
    const query = searchQuery.toLowerCase();
    const suggestions = allMenuItems
      .filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
      )
      .slice(0, 5) // Limit to 5 suggestions
      .map(item => item.name);
    
    return [...new Set(suggestions)]; // Remove duplicates
  }, [searchQuery, allMenuItems]);

  const filteredMenu = useMemo(() => {
    const currentMenu = menuData[activeCategory] || [];
    
    if (!searchQuery.trim()) {
      return currentMenu;
    }
    
    const query = searchQuery.toLowerCase();
    return currentMenu.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query) ||
      item.price.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = useCallback((categoryKey) => {
    setActiveCategory(categoryKey);
    setSearchQuery('');
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleSuggestionClick = useCallback((suggestion) => {
    setSearchQuery(suggestion);
    setIsSearchFocused(false);
  }, []);

  const handleSearchFocus = useCallback(() => {
    setIsSearchFocused(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => setIsSearchFocused(false), 200);
  }, []);

  const clearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <section id="menu" className="section-padding bg-cafe-cream" aria-labelledby="menu-heading">
      <div className="container-custom">
        <div className="text-center mb-mobile">
          <h2 id="menu-heading" className="text-responsive-xl font-bold text-cafe-brown mb-4 sm:mb-6 font-serif">
            Our Menu
          </h2>
          <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto">
            Fresh ingredients, delicious meals. We have one of the most delicious breakfast, 
            lunch, dinner & coffee menus in Woodside, Queens. Don't miss our authentic food!
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 sm:mb-8 px-3 sm:px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-4">
              <label htmlFor="menu-search" className="block text-sm font-medium text-cafe-brown mb-2">
                Search Menu Items
              </label>
              <div className="relative">
                <input
                  id="menu-search"
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  placeholder="Search by name, description, or price..."
                  className="input-mobile pl-10 pr-10 w-full"
                  aria-describedby="search-help"
                  autoComplete="off"
                />
                <svg className="absolute left-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-3 top-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-cafe-brown transition-colors duration-200"
                    aria-label="Clear search"
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>
              <p id="search-help" className="text-xs text-gray-500 mt-1">
                Try searching for "momo", "coffee", "breakfast", or any menu item
              </p>
              
              {/* Search Suggestions */}
              {isSearchFocused && searchSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {searchSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-cafe-cream hover:text-cafe-brown transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs-mobile">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`category-btn-mobile ${
                activeCategory === category.key
                  ? 'bg-cafe-brown text-white shadow-lg scale-105'
                  : 'bg-white text-cafe-brown hover:bg-cafe-brown hover:text-white shadow-md hover:shadow-lg'
              }`}
              aria-pressed={activeCategory === category.key}
              aria-label={`Filter by ${category.label}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Special Title for Our Authentic Food */}
        {activeCategory === 'special' && (
          <div className="text-center mb-8 sm:mb-12 px-3 sm:px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cafe-brown mb-3 sm:mb-4 font-serif">
              Our Organic and Health
            </h3>
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto italic">
              Representing our Nepal's culture
            </p>
          </div>
        )}

        {/* Results Counter */}
        {filteredMenu.length > 0 && (
          <div className="text-center mb-6 sm:mb-8 px-3 sm:px-4">
            <p className="text-sm sm:text-base text-gray-600">
              Showing {filteredMenu.length} {filteredMenu.length === 1 ? 'item' : 'items'}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid-responsive px-3 sm:px-4">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <div
                key={item.id}
                className="card-mobile overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.description}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-cafe-brown text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg">
                    {item.price}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-cafe-brown mb-2 sm:mb-3 font-serif group-hover:text-cafe-orange transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-8 sm:py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-sm sm:text-base text-gray-500">
                {searchQuery ? `No menu items match "${searchQuery}"` : 'No items available in this category'}
              </p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="mt-4 text-cafe-brown hover:text-cafe-orange font-medium transition-colors duration-200 text-sm sm:text-base"
                  aria-label="Clear search and show all items"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 px-3 sm:px-4">
          <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
            {searchQuery 
              ? `Found something you like? Come visit us to try it!` 
              : `Can't decide? Come visit us and let our friendly staff help you choose!`
            }
          </p>
          <div className="btn-group-mobile justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary w-mobile-full"
              aria-label="Visit our cafe location"
            >
              Visit Us
            </button>
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="text-cafe-brown hover:text-cafe-orange font-medium px-4 sm:px-6 py-2 sm:py-3 border border-cafe-brown rounded-lg hover:bg-cafe-brown hover:text-white transition-all duration-300 w-mobile-full"
                aria-label="Clear search and view all menu items"
              >
                View All Items
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
