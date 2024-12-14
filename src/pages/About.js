import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Discover the story behind our travel agency and why we are passionate about making your travel dreams come true.
        </p>
      </section>

      {/* About Content Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-1/2 lg:w-1/2 mb-8 md:mb-0">
            <h3 className="text-3xl font-semibold mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              At our Galaxy travel tour, we believe that every journey is unique, and our mission is to curate personalized travel experiences that exceed your expectations. We strive to offer not just vacations, but experiences that you will remember for a lifetime.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're looking for a relaxing beach holiday or an adventurous mountain getaway, we have the expertise and resources to make your dream trip a reality.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2">
            <img
              src="./images/our_mission.jpeg"
              alt="Our Mission"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h3 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="./images/andrew_ceo.jpg"
                alt="Andrew Amos"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Andrew Amos</h4>
              <p className="text-lg text-gray-700">CEO & Founder</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="./images/jane_travel.jpg"
                alt="Jane Ethan"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Jane Ethan</h4>
              <p className="text-lg text-gray-700">Travel Consultant</p>
            </div>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src="./images/mark_marketing.jpg"
                alt="Mark Wilson"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">Mark Wilson</h4>
              <p className="text-lg text-gray-700">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4">
        <h3 className="text-3xl font-semibold text-center mb-8">Our Core Values</h3>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Customer Focused</h4>
              <p>We prioritize our customers’ needs, ensuring every trip is tailored to their preferences.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Quality Service</h4>
              <p>We strive to offer the highest level of service, from planning to execution.</p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/4 text-center mb-8">
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-semibold mb-4">Sustainability</h4>
              <p>We are committed to sustainable travel practices that protect the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
        <h3 className="text-3xl font-semibold mb-6">Ready to Start Your Adventure?</h3>
        <p className="text-lg mb-6">Contact us today and let’s plan the trip of a lifetime!</p>
        <a
          href="/contact"
          className="bg-white text-blue-600 py-3 px-6 rounded-full text-xl font-semibold hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </a>
      </section>
    </Layout>
  );
};

export default About;
