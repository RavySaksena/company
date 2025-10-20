import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav style={{ background: '#333', color: 'white', padding: '1rem', display: 'flex', justifyContent: 'space-around' }}>
      <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
      <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link>
      <Link href="/services" style={{ color: 'white', textDecoration: 'none' }}>Our Services</Link>
    </nav>
  );
};

export default Navbar;