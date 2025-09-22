import React, { useState, useMemo, useCallback, useEffect } from 'react';
import menuData from '../data/menuData.json';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');

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

  const filteredMenu = useMemo(() => {
    const currentMenu = menuData[activeCategory] || [];
    
    if (!searchQuery.trim()) {
      return currentMenu;
    }
    
    const query = searchQuery.toLowerCase();
    return currentMenu.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.description.toLowerCase().includes(query)
    );
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = useCallback((categoryKey) => {
    setActiveCategory(categoryKey);
    setSearchQuery('');
  }, []);

  return (
    <section id="menu" className="section-padding bg-cafe-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-6 font-serif">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fresh ingredients, delicious meals. We have one of the most delicious breakfast, 
            lunch, dinner & coffee menus in Woodside, Queens. Don't miss our authentic food!
          </p>
        </div>


        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 px-4">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => handleCategoryChange(category.key)}
              className={`px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-sm md:text-base ${
                activeCategory === category.key
                  ? 'bg-cafe-brown text-white shadow-lg scale-105'
                  : 'bg-white text-cafe-brown hover:bg-cafe-brown hover:text-white shadow-md hover:shadow-lg'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Special Title for Our Authentic Food */}
        {activeCategory === 'special' && (
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-cafe-brown mb-4 font-serif">
              Our Organic and Health
            </h3>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto italic">
              Representing our Nepal's culture
            </p>
          </div>
        )}

        {/* Results Counter */}
        {filteredMenu.length > 0 && (
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Showing {filteredMenu.length} {filteredMenu.length === 1 ? 'item' : 'items'}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 px-4">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-cafe-brown text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {item.price}
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-cafe-brown mb-3 font-serif group-hover:text-cafe-orange transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
              <p className="text-gray-500">
                {searchQuery ? `No menu items match "${searchQuery}"` : 'No items available in this category'}
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-4 text-cafe-brown hover:text-cafe-orange font-medium transition-colors duration-200"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            {searchQuery 
              ? `Found something you like? Come visit us to try it!` 
              : `Can't decide? Come visit us and let our friendly staff help you choose!`
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-lg px-8 py-4 transition-all duration-300 hover:scale-105"
            >
              Visit Us
            </button>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="text-cafe-brown hover:text-cafe-orange font-medium px-6 py-3 border border-cafe-brown rounded-lg hover:bg-cafe-brown hover:text-white transition-all duration-300"
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
