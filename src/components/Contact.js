import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-6 font-serif">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Come & have a great meal with us! We're located in Woodside, Queens, 
            New York, and we'd love to welcome you to our peaceful cafe. 
            Walk-ins are always welcome!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-cafe-brown mb-6 font-serif">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cafe-brown rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cafe-brown mb-2">Address</h4>
                    <p className="text-gray-600">
                      Manaslu Cafe<br />
                      3906-64st Woodside<br />
                      Woodside, NY 11377<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cafe-brown rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cafe-brown mb-2">Phone</h4>
                    <p className="text-gray-600">+1 347-527-1202</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cafe-brown rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cafe-brown mb-2">Email</h4>
                    <p className="text-gray-600">manaslucafe@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-cafe-brown rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cafe-brown mb-2">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p><strong>Monday - Friday:</strong> 7:00am – 10:00pm</p>
                      <p><strong>Saturday:</strong> 8:00am – 10:30pm</p>
                      <p><strong>Sunday:</strong> 7:00am – 10:00pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-cafe-brown mb-6 font-serif">
              Find Us
            </h3>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.0911409096045!2d-73.90035088635268!3d40.74613567997584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fc30e6f9aeb%3A0x4aab272435307ec7!2sManaslu%20Cafe!5e1!3m2!1sen!2snp!4v1758079147490!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manaslu Cafe Location"
              ></iframe>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">
              Located in Woodside, Queens, New York - the most peaceful cafe in the area. 
              No reservations needed, just walk in!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
