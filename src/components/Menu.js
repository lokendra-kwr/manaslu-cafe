import React, { useState, useMemo, useCallback } from 'react';
import menuData from '../data/menuData.json';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('drinks');

  const categories = [
    { key: 'drinks', label: 'Drinks' },
    { key: 'special_soup', label: 'Special Soup' },
    { key: 'breakfast_set', label: 'Breakfast Set' },
    { key: 'non_veg_appetizers', label: 'Non-Veg Appetizers' },
    { key: 'veggie_appetizers', label: 'Veggie Appetizers' },
    { key: 'momo_dumplings', label: 'MOMO/Dumplings' },
    { key: 'chowmein', label: 'Chowmein' },
    { key: 'curry', label: 'Curry' },
    { key: 'thukpa', label: 'Thukpa' },
    { key: 'dal_bhat', label: 'Dal/Bhat' },
    { key: 'dhido_set', label: 'Dhido Set' },
    { key: 'japanese_food', label: 'Japanese Food' },
    { key: 'fried_rice', label: 'Fried Rice' }
  ];

  const filteredMenu = useMemo(() => {
    return menuData[activeCategory] || [];
  }, [activeCategory]);

  const handleCategoryChange = useCallback((categoryKey) => {
    setActiveCategory(categoryKey);
  }, []);

  return (
    <section id="menu" className="py-16 px-4" style={{ backgroundColor: '#4b2c2c' }} aria-labelledby="menu-heading">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 id="menu-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#f4d7a1', fontFamily: 'Georgia, serif' }}>
            Our Menu
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{ color: '#f4d7a1' }}>
            Fresh ingredients, delicious meals. We have one of the most delicious breakfast, 
            lunch, dinner & coffee menus in Woodside, Queens. Don't miss our authentic food!
          </p>
        </div>


        {/* Category Tabs */}
        <div className="overflow-x-auto pb-2 mb-6 sm:mb-8 md:mb-12 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-nowrap gap-2 sm:gap-3 md:gap-4 justify-start sm:justify-center min-w-max sm:min-w-0">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                className={`px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap touch-manipulation min-h-[40px] sm:min-h-[44px] ${
                  activeCategory === category.key
                    ? 'bg-yellow-600 text-white shadow-lg scale-105'
                    : 'bg-yellow-100 text-yellow-800 active:bg-yellow-200 hover:bg-yellow-200 hover:text-yellow-900 shadow-md hover:shadow-lg'
                }`}
                style={{ fontFamily: 'Georgia, serif' }}
                aria-pressed={activeCategory === category.key}
                aria-label={`Filter by ${category.label}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Special Title for Authentic Nepali Food */}
        {(activeCategory === 'dal_bhat' || activeCategory === 'dhido_set' || activeCategory === 'thukpa' || activeCategory === 'curry' || activeCategory === 'momo_dumplings' || activeCategory === 'chowmein') && (
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#f4d7a1', fontFamily: 'Georgia, serif' }}>
              Our Organic and Health
            </h3>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto italic px-4" style={{ color: '#f4d7a1' }}>
              Representing our Nepal's culture
            </p>
          </div>
        )}


        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {filteredMenu.length > 0 ? (
            filteredMenu.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-4 md:p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2 group min-h-[120px] sm:min-h-[140px]"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2 sm:mb-2 md:mb-3 group-hover:text-yellow-300 transition-colors duration-300 leading-tight" style={{ color: '#f4d7a1' }}>
                  {item.name}
                </h3>
                <p className="text-sm sm:text-base md:text-base lg:text-lg font-semibold mb-2 sm:mb-2 md:mb-3" style={{ color: '#f4d7a1' }}>
                  {item.price}
                </p>
                <p className="text-xs sm:text-sm md:text-sm opacity-90 leading-relaxed line-clamp-3" style={{ color: '#f4d7a1' }}>
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="mb-4" style={{ color: '#f4d7a1' }}>
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#f4d7a1', fontFamily: 'Georgia, serif' }}>No items found</h3>
              <p className="text-lg" style={{ color: '#f4d7a1' }}>
                No items available in this category
              </p>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-base sm:text-lg md:text-xl mb-6 px-4" style={{ color: '#f4d7a1' }}>
            Can't decide? Come visit us and let our friendly staff help you choose!
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg text-sm sm:text-base"
            style={{ fontFamily: 'Georgia, serif' }}
            aria-label="Visit our cafe location"
          >
            Visit Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default Menu;
