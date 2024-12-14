import React, { useState } from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          We would love to hear from you! Get in touch with us for any travel inquiries or assistance.
        </p>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Send Us a Message</h3>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-xl font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-xl font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-xl font-medium text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Visit Us or Reach Out</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Our Office</h4>
            <p>123 Travel Avenue, Suite 400</p>
            <p>City Name, Country</p>
            <p className="mt-4">
              <strong>Phone:</strong> +123 456 7890
            </p>
            <p>
              <strong>Email:</strong> contact@traveltour.com
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-6 bg-white rounded-lg shadow-md">
            <h4 className="text-2xl font-semibold mb-4">Business Hours</h4>
            <p>
              <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
            </p>
            <p>
              <strong>Saturday:</strong> 10:00 AM - 2:00 PM
            </p>
            <p>
              <strong>Sunday:</strong> Closed
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Embed (Optional) */}
      <section className="py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Find Us on the Map</h3>
        <div className="w-full h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.437866386913!2d-74.00601568431823!3d40.71277607933177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2040c1c45f%3A0x32e9c9a4a929cc32!2sOne%20World%20Trade%20Center!5e0!3m2!1sen!2sus!4v1639489335229!5m2!1sen!2sus"
            className="w-full h-full border-0 rounded-lg"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
          ></iframe>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-8">Let’s Get in Touch!</h3>
        <p className="text-lg mb-6">If you have any questions or need assistance, don’t hesitate to contact us!</p>
        <a
          href="mailto:contact@traveltour.com"
          className="bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
        >
          Email Us
        </a>
      </section>
    </Layout>
  );
};

export default Contact;
