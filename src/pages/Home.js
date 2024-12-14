import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[70vh] text-white relative" style={{ backgroundImage: "url('./images/main_heroimg.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Galaxy Travel Tour</h1>
            <p className="text-lg md:text-2xl mb-8">Your adventure starts here. Explore the world with us!</p>
            <a href="/services" className="bg-blue-600 text-white py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-800 transition duration-300">
              Discover Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Destinations</h2>
          <p className="text-lg text-gray-700">Explore our top destinations that you must visit.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Paris, France', image: './images/France_Paris.jpg', description: 'Experience the city of lights with its iconic landmarks and romantic ambiance.' },
            { title: 'Tokyo, Japan', image: './images/tokyo_japan.JPG', description: 'Dive into the vibrant culture and modern marvels of Tokyo.' },
            { title: 'New York, USA', image: './images/newyork_usa.webp', description: 'Explore the city that never sleeps, full of iconic sights and endless activities.' },
          ].map((destination, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={destination.image} alt={destination.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{destination.title}</h3>
                <p className="text-lg text-gray-700">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">We offer a wide range of services to make your travel experience unforgettable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Custom Itineraries', icon: '🌍', description: 'Tailor-made travel plans to suit your preferences and budget.' },
            { title: 'Flight Bookings', icon: '✈️', description: 'Get the best deals on flights to your favorite destinations.' },
            { title: 'Accommodation', icon: '🏨', description: 'Stay at the best hotels and enjoy comfortable accommodations.' },
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-lg text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-gray-700">Hear from our satisfied travelers who have enjoyed their journeys with us.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'John & Jane Doe', image: './images/john_cl.jpeg', quote: 'Travel Tour made our honeymoon unforgettable. The service was exceptional and every detail was perfect.' },
            { name: 'Mary Smith', image: './images/marry_cl.jpg', quote: 'Best travel experience ever! Highly recommend Travel Tour for their outstanding customer service.' },
            { name: 'James Brown', image: './images/james_cl.jpg', quote: 'A seamless and enjoyable trip. Travel Tour took care of everything, so we could relax and enjoy.' },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img src={testimonial.image} alt={testimonial.name} className="w-24 h-24 rounded-full mx-auto mb-4"/>
              <p className="text-lg italic mb-2">"{testimonial.quote}"</p>
              <p className="text-lg font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">From Our Blog</h2>
          <p className="text-lg text-gray-700">Get the latest travel tips, destination guides, and inspiration for your next trip.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: 'Top 10 Beaches to Visit in 2024', image: './images/top_beaches.webp', description: 'Discover the most stunning beaches around the world for your next vacation.' },
            { title: 'How to Travel on a Budget', image: './images/travel_budget.webp', description: 'Tips and tricks to make the most out of your travels without breaking the bank.' },
            { title: 'A Guide to Cultural Etiquette', image: './images/guide_cultural.jpg', description: 'Learn about cultural norms and etiquette when visiting different countries.' },
          ].map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-lg text-gray-700">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Journey?</h3>
        <p className="text-lg mb-6">Contact us today to plan your next adventure with our expert team.</p>
        <a href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300">
          Get In Touch
        </a>
      </section>
    </Layout>
  );
};

export default Home;
