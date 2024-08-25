import React from 'react';
import Header from '../Components/Header/Header'
import Contact from '../Components/Contact/Contact';
import Link from 'next/link';
import Footer from '@/Components/Footer/Footer';
import Head from 'next/head';


export default function Home() {
  return (
    <div 
     style={{
        background: 'linear-gradient(135deg, #1f1c2c 0%, #928DAB 100%)', // Futuristic gradient
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
        backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kfGVufDB8fHx8MTY0NjY3OTI0Mw&ixlib=rb-1.2.1&q=80&w=1080)', // Futuristic AI-themed background image
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
          padding: '20px',
        }}
      >
          <img
          src="https://media.istockphoto.com/id/1486626507/photo/businessman-use-ai-to-help-work-ai-learning-and-artificial-intelligence-business-modern.jpg?s=612x612&w=0&k=20&c=fMxbbRcBovcCWCgvmGLofM3CAfDy-nsv-OjmzmVWZ4U=" 
          alt="AI animation"
          style={{
            maxWidth: '45%',
            height: 'auto',
            borderRadius: '20px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            border: '3px solid #00bcd4', 
          }}
        />

       
       <div 
          style={{
            maxWidth: '50%',
            textAlign: 'left',
            color: '#fff',
            fontSize: '1.5rem',
            lineHeight: '1.8',
            paddingLeft: '20px',
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
          }}
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
       
         <section className="bg-blue-800 text-white text-center py-20">
          <h1 className="text-5xl font-bold">Welcome to Rella</h1>
          <p className="mt-4 text-xl">Your ultimate AI-powered platform for all your needs.</p>
           <Link href="/HomePage">
            <button className="mt-8 px-6 py-3 bg-white text-blue-800 rounded-full hover:bg-gray-200 transition">Get Started</button>
          </Link>
          
        </section>

        
       <section id="features" className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold">Features</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 1</h3>
                <p className="mt-4">Brief description of feature 1.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 2</h3>
                <p className="mt-4">Brief description of feature 2.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">Feature 3</h3>
                <p className="mt-4">Brief description of feature 3.</p>
              </div>
            </div>
          </div>
        </section>
        
         <section className="bg-gray-900 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">What Our Users Say</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="italic">"Rella has completely transformed the way we work!"</p>
                <p className="mt-4 font-semibold text-white">- User 1</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="italic">"The best AI platform we've ever used!"</p>
                <p className="mt-4 font-semibold text-white">- User 2</p>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="italic">"Incredible features and easy to use!"</p>
                <p className="mt-4 font-semibold text-white">- User 3</p>
              </div>
            </div>
          </div>
        </section>

        
         <section className="bg-blue-800 text-white text-center py-20">
          <h2 className="text-3xl font-bold">Ready to get started?</h2>
          <button className="mt-8 px-6 py-3 bg-white text-blue-800 rounded-full hover:bg-gray-200 transition">Sign Up Now</button>
        </section>
      </main>
      <Contact />
      <Footer/>
    </div>
  );
}
