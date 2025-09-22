import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely amazing food! The authentic Nepali flavors took me back to my trip to Kathmandu. The momo and thukpa are out of this world!",
      date: "2 days ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 5,
      comment: "Best cafe in Woodside! The coffee is perfectly brewed and the breakfast menu is incredible. The staff is so friendly and welcoming.",
      date: "1 week ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      rating: 5,
      comment: "I've been coming here for months and it never disappoints. The Kodo ko Roti is a must-try - so authentic and delicious!",
      date: "2 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      comment: "The atmosphere is so peaceful and the food quality is outstanding. The Himalayan Thukpa is my go-to comfort food. Highly recommended!",
      date: "3 weeks ago"
    },
    {
      id: 5,
      name: "Lisa Park",
      rating: 5,
      comment: "Amazing experience! The Newari Platter was incredible and the service was top-notch. This place truly represents the best of Nepali cuisine.",
      date: "1 month ago"
    },
    {
      id: 6,
      name: "James Wilson",
      rating: 5,
      comment: "The Manaslu Signature Momo is absolutely divine! The flavors are authentic and the presentation is beautiful. A hidden gem in Queens!",
      date: "1 month ago"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section id="reviews" className="section-padding bg-cafe-cream">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-6 font-serif">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it! Here's what our amazing customers have to say about their experience at Manaslu Cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 mr-4">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4 italic">
                "{review.comment}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cafe-brown rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-cafe-brown">{review.name}</h4>
                  <p className="text-sm text-gray-500">Verified Customer</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-cafe-brown mb-4 font-serif">
            Ready to Experience the Magic?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Join our satisfied customers and discover why Manaslu Cafe is the talk of Woodside!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button 
              onClick={() => {
                const element = document.getElementById('menu');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              View Our Menu
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-cafe-brown hover:text-cafe-orange font-medium px-6 sm:px-8 py-3 sm:py-4 border border-cafe-brown rounded-lg hover:bg-cafe-brown hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              Visit Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
