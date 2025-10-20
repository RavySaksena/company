import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[70vh]">
      
      {}
      <div className="animate-fade-in-left">
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
          transformasi ide <span className="text-cyan-400">sosialisasi digital</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8">
         Kami menyediakan solusi teknologi inovatif yang dirancang untuk mengakselerasi pertumbuhan bisnis Anda di era digital.
        </p>
        <Link 
          href="/services" 
          className="inline-block bg-cyan-500 text-white font-bold text-lg py-3 px-8 rounded-lg hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
        >
          Ini layanan kami
        </Link>
      </div>

      {}
      <div className="animate-fade-in-right">
        {}
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#08BDBA" d="M48.1,-70.9C62.2,-62.9,73.4,-49.8,79.5,-34.5C85.7,-19.2,86.8,-1.7,82.4,14.6C78,30.9,68.1,46.1,55,57.9C41.9,69.7,25.6,78.2,7.9,80.6C-9.8,83,-28.9,79.3,-43.8,69.5C-58.7,59.7,-69.5,43.8,-75.3,27.1C-81.1,10.4,-81.9,-7.1,-76.4,-22.7C-70.9,-38.2,-59.1,-51.8,-45.3,-60.8C-31.4,-69.8,-15.7,-74.2,1,-75.1C17.7,-76,35.5,-78.8,48.1,-70.9Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  );
}

export default Home;