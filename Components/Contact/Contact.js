import React from 'react';

export default function Contact() {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)', // Futuristic gradient
        minHeight: '100vh',
        color: '#fff',
        fontFamily: 'Orbitron, sans-serif',
        backgroundImage: 'url(https://images.unsplash.com/photo-1566438485-3d00e0f464f7?fit=crop&w=2560&h=1440)', // High-tech background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <main className="pt-20">
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-xl">We'd love to hear from you. Reach out to us with any questions or feedback.</p>
        </section>

        <section className="py-16">
          <div className="container mx-auto flex flex-col items-center">
            <div
              style={{
                width: '100%',
                maxWidth: '800px',
                background: '#1f1c2c',
                borderRadius: '10px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                padding: '20px',
                color: '#fff',
              }}
            >
              <form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                }}
              >
                <input
                  type="text"
                  placeholder="Name"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #00bcd4', // Cyan color for border
                    background: '#1f1c2c',
                    color: '#fff',
                    fontSize: '1rem',
                  }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #00bcd4', // Cyan color for border
                    background: '#1f1c2c',
                    color: '#fff',
                    fontSize: '1rem',
                  }}
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: '1px solid #00bcd4', // Cyan color for border
                    background: '#1f1c2c',
                    color: '#fff',
                    fontSize: '1rem',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '15px',
                    borderRadius: '8px',
                    border: 'none',
                    background: '#00bcd4', // Cyan background
                    color: '#fff',
                    fontSize: '1rem',
                    cursor: 'pointer',
                    transition: 'background 0.3s',
                  }}
                  onMouseOver={(e) => e.target.style.background = '#0097a7'} // Darker cyan on hover
                  onMouseOut={(e) => e.target.style.background = '#00bcd4'} // Original cyan
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-gray-900 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold text-white">Our Location</h2>
            <div className="mt-8">
              <p className="text-lg">123 AI Avenue, Tech City, TX 12345</p>
              <p className="text-lg">Email: contact@rella.ai</p>
              <p className="text-lg">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

