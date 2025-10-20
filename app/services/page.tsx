import Link from 'next/link';
import React from 'react';

interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
}

const services: Service[] = [
  { id: 1, slug: 'web-development', title: 'Web Development', shortDescription: 'Membuat website moderen.' },
  { id: 2, slug: 'mobile-app-development', title: 'Mobile App Development', shortDescription: 'membuat apliksi ios ataupun android.' },
  { id: 3, slug: 'title-solusi', title: 'solusi teknologi', shortDescription: 'Solusi tentang apapun kami atasi.' },
];

const ServicesPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-2">Our Services</h1>
      <p className="text-xl text-gray-300 mb-8">We offer a wide range of services to meet your business needs.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link key={service.id} href={`/services/${service.slug}`}>
            <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between h-full hover:scale-105 hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                <p className="text-gray-400">{service.shortDescription}</p>
              </div>
              <div className="mt-4 text-cyan-400 font-semibold flex items-center">
                Learn More
                <svg xmlns="http://www.w.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;