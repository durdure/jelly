// pages/contact.js
import React from 'react';
import Header from '../Header/Header';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="container mx-auto py-16">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
          <p className="text-center mt-4 text-lg">We’d love to hear from you! Send us a message using the form below.</p>

          <div className="mt-8 max-w-2xl mx-auto">
            <form className="bg-white p-8 shadow-lg rounded-lg">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea placeholder="Your Message" className="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
