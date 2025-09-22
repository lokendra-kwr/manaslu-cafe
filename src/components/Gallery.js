import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop',
      alt: 'Cafe Interior',
      title: 'Cozy Interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      alt: 'Fresh Breakfast',
      title: 'Fresh Breakfast'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop',
      alt: 'Outdoor Seating',
      title: 'Garden Seating'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=600&h=400&fit=crop',
      alt: 'Coffee Bar',
      title: 'Coffee Bar'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      alt: 'Delicious Food',
      title: 'Delicious Meals'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=400&fit=crop',
      alt: 'Kitchen',
      title: 'Our Kitchen'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop',
      alt: 'Coffee Preparation',
      title: 'Coffee Preparation'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&h=400&fit=crop',
      alt: 'Dining Area',
      title: 'Dining Area'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?w=600&h=400&fit=crop',
      alt: 'Fresh Ingredients',
      title: 'Fresh Ingredients'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-6 font-serif">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our beautiful cafe, delicious food, and the warm atmosphere 
            that makes Manaslu Cafe the most peaceful cafe in Kathmandu.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-white text-xl font-bold font-serif mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-cafe-cream rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-cafe-brown mb-4 font-serif">
              Dine Outside or Eat In
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Manaslu Cafe has a lovely mini garden that gets the warm sun every morning 
              which our guests truly enjoy. Inside we have well spaced tables, a coffee bar, 
              bathroom facilities & even quiet zones for people looking to chill out with a book.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Free WiFi</span>
              </div>
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Outdoor Seating</span>
              </div>
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Quiet Zones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
