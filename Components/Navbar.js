// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-gray-900 col-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold hover:text-gray-400">
          Rella
        </Link>
        <button className="lg:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="/" passHref className="hover:text-gray-400 transition-colors">
           Home
          </Link>const [isOpen, setIsOpen] = useState(false);
          <Link href="/contact" passHref className="hover:text-gray-400 transition-colors">
            Contact
          </Link>
          <Link href="/learn-more" passHref className="hover:text-gray-400 transition-colors">
            Learn More
          </Link>
          {/* Add more links as needed */}
        </nav>
      </div>
    </header>
  );
}
