import React from 'react';
import Layout from '../components/Layout';

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Explore the variety of travel services we offer to make your trip memorable and hassle-free.
        </p>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">What We Offer</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Customized Travel Packages</h4>
            <p>
              We provide tailored travel experiences based on your preferences, whether it's adventure, relaxation, or cultural immersion.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Group Tours</h4>
            <p>
              Join our guided group tours for an unforgettable adventure, with a focus on exploration and making new friends.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Luxury Travel</h4>
            <p>
              Experience the finest in luxury travel with premium services, exquisite destinations, and unparalleled comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Why Choose Us?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Expert Guidance</h4>
            <p>
              Our experienced team provides expert guidance to ensure you have the best travel experience possible.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">24/7 Support</h4>
            <p>
              We offer round-the-clock support, so you're never alone during your travels.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Affordable Prices</h4>
            <p>
              Get the best value for your money with our competitive pricing and special offers.
            </p>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Packages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Adventure Package</h4>
            <p>
              Experience the thrill of adventure with our carefully curated packages that include hiking, rafting, and more.
            </p>
            <img src="./images/adventure_pkg.jpg" alt="Adventure Package" className="w-full h-48 object-cover rounded mt-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Relaxation Package</h4>
            <p>
              Unwind and relax with our special packages that offer the best in comfort and luxury at serene locations.
            </p>
            <img src="./images/relax_pkg.jpg" alt="Relaxation Package" className="w-full h-48 object-cover rounded mt-4" />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Cultural Package</h4>
            <p>
              Immerse yourself in the local culture and traditions with our comprehensive cultural packages.
            </p>
            <img src="./images/cultural_pkg.jpg" alt="Cultural Package" className="w-full h-48 object-cover rounded mt-4" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-8">Ready to Plan Your Next Adventure?</h3>
        <p className="text-lg mb-6">Contact us today to get started with your personalized travel experience!</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get in Touch
        </a>
      </section>
    </Layout>
  );
};

export default Services;
