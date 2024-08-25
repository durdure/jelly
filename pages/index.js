import React from 'react';
import Header from '../Components/Header/Header'

export default function Home() {
  return (
    <div 
    style={{
        background: 'linear-gradient(135deg, #1f1c2c 0%, #928DAB 100%)', 
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTY0NjY3OTI0Mw&ixlib=rb-1.2.1&q=80&w=1080)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Header />
       <div 
         style={{
          marginTop: '100px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          padding: '20px'
        }}
      >
        {/* GIF Image on the Left */}
        <img
          src="https://tenor.com/view/music-gif-15352565" // AI-themed GIF
          alt="AI animation"
          style={{
            maxWidth: '45%',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            border: '3px solid #0e76a8',
          }}
        />

        {/* Motivational Words on the Right */}
        <div 
          
        >
          <p>
            "The future belongs to those who believe in the beauty of their dreams."
          </p>
          <p>
            "Innovation distinguishes between a leader and a follower."
          </p>
          <p>
            "AI is not just a tool, it's a way of thinking."
          </p>
        </div>
      </div>
      <main className="pt-20">
       
        <section className="bg-blue-600 text-white text-center py-20">
          <h1 className="text-5xl font-bold">Welcome to Rella</h1>
          <p className="mt-4 text-xl">Your ultimate AI-powered platform for all your needs.</p>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition">Get Started</button>
        </section>

        
        <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Features</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 1</h3>
                <p className="mt-4">Brief description of feature 1.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 2</h3>
                <p className="mt-4">Brief description of feature 2.</p>
              </div>
             
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 3</h3>
                <p className="mt-4">Brief description of feature 3.</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">What Our Users Say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
             
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"Rella has completely transformed the way we work!"</p>
                <p className="mt-4 font-semibold">- User 1</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"The best AI platform we've ever used!"</p>
                <p className="mt-4 font-semibold">- User 2</p>
              </div>
            
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="italic">"Incredible features and easy to use!"</p>
                <p className="mt-4 font-semibold">- User 3</p>
              </div>
            </div>
          </div>
        </section>

        
        <section className="bg-blue-600 text-white text-center py-20">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-full hover:bg-gray-200 transition">Sign Up Now</button>
        </section>
      </main>
    </div>
  );
}
