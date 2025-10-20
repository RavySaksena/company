import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
              kenaTech
            </Link>
          </div>
          <div className="flex space-x-6 text-lg">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              About Us
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;