import React from 'react';

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/gallery/571132929_122108474445038171_3670871302657541012_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 2,
      src: '/gallery/574258719_122109123339038171_3290358051004704056_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 3,
      src: '/gallery/574968250_122108302869038171_7583787411854774792_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 4,
      src: '/gallery/571128305_122107969251038171_6063496552170724352_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 5,
      src: '/gallery/571122790_122107967079038171_2319699358846950803_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 6,
      src: '/gallery/571740022_122107967013038171_18122622273851016_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    },
    {
      id: 7,
      src: '/gallery/571118800_122107781931038171_2509560862458000179_n.jpg',
      alt: 'Manaslu Cafe Gallery',
      title: 'Manaslu Cafe'
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white" aria-labelledby="gallery-heading">
      <div className="container-custom">
        <div className="text-center mb-mobile">
          <h2 id="gallery-heading" className="text-responsive-xl font-bold text-cafe-brown mb-4 sm:mb-6 font-serif">
            Gallery
          </h2>
          <p className="text-responsive-base text-gray-600 max-w-3xl mx-auto">
            Take a look at our beautiful cafe, delicious food, and the warm atmosphere 
            that makes Manaslu Cafe the most peaceful cafe in Woodside, Queens.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-3 sm:px-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative group overflow-hidden rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-56 sm:h-64 md:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <h3 className="text-white text-lg sm:text-xl font-bold font-serif mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 text-center px-3 sm:px-4">
          <div className="bg-cafe-cream rounded-lg sm:rounded-xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-cafe-brown mb-3 sm:mb-4 font-serif">
              Dine Outside or Eat In
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
              Manaslu Cafe has a lovely mini garden that gets the warm sun every morning 
              which our guests truly enjoy. Inside we have well spaced tables, a coffee bar, 
              bathroom facilities & even quiet zones for people looking to chill out with a book.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Free WiFi</span>
              </div>
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Outdoor Seating</span>
              </div>
              <div className="flex items-center justify-center text-cafe-brown">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-sm sm:text-base">Quiet Zones</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
