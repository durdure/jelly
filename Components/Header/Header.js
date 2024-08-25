// components/Header.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from './Rella.png';
function Header() {
  return (
    <header 
     style={{
        backgroundColor: '#121212', 
        color: '#00FFAA', 
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)', 
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)', 
        width: '100%',
        top: '0',
        left: '0',
        right: '0',
        position: 'relative',
      }}
    >
      <div 
      style={
        {
         display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }
      }
      >
        {/* Logo */}
        <div 
        style={
          {
            display: 'flex',
            alignItems: 'center',

          }
        }
        >
          <Link href="/" className="flex items-center hover:text-blue-400 transition-colors">
            <Image src={Logo} alt="Rella Logo" width={100} height={60} className="mr-2" />
            <span className="text-3xl font-bold font-orbitron"
            style={{
              color: '#FFD700',
              textShadow: '2px 2px 0 #000'

              }}>Rella</span>

          </Link>
        </div>

        {/* Navigation */}
        <nav
        style={
          {
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
          }
        }
        >
          <Link href="/" style={{ color: '#BB86FC', transition: 'color 0.3s' }} className="hover:text-cyan-300">Home</Link>
          <Link href="/features" style={{ color: '#BB86FC', transition: 'color 0.3s' }} className="hover:text-cyan-300">Features</Link>
          <Link href="/contact" style={{ color: '#BB86FC', transition: 'color 0.3s' }} className="hover:text-cyan-300">Contact</Link>
          <Link href="/about" style={{ color: '#BB86FC', transition: 'color 0.3s' }} className="hover:text-cyan-300">About</Link>
        </nav>

        {/* Actions */}
        <div className="space-x-4">
          <Link href="/login" 
          style={
            { 
              backgroundColor: '#1F1B24', 
              color: '#03DAC5', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px', 
              transition: 'background-color 0.3s' 
              }} className="hover:bg-teal-600">
                Login
              </Link>
           <Link href="/signup" 
           style=
           {
            { 
              backgroundColor: '#1F1B24', 
              color: '#03DAC5', 
              padding: '0.5rem 1rem', 
              borderRadius: '8px', 
              transition: 'background-color 0.3s', 
              marginLeft: '1rem'
              }
              } className="hover:bg-teal-600">Sign Up</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
