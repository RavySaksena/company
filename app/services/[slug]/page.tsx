import React from 'react';
import Link from 'next/link';


interface ServiceDetailPageProps {
  params: {
    slug: string;
  };
}


interface ServiceDetail {
  title: string;
  description: string;
}


const serviceDetails: Record<string, ServiceDetail> = {
  'web-development': {
    title: 'kustom web develop',
    description: 'Kita membuat web dengan bagus,rapih dan indah dengan menggunakan node.js dan lain lain.'
  },
  'mobile-app-development': {
    title: 'Mobile App',
    description: 'Kita membuat mobile app yang terbaik dari Ios maupun android.'
  },
  'title-solusi': {
    title: 'Solusi apapun',
    description: 'Membereskan semua solusi yang pelanggan pusingkan entah itu codde ataupun apapun.'
  }
};

const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ params }) => {
  const { slug } = params;
  const details = serviceDetails[slug];

  if (!details) {
    return (
        <div className="text-center text-red-500">
            <h1>Service tidak ada!</h1>
        </div>
    );
  }

  return (
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl animate-fade-in">
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">{details.title}</h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">{details.description}</p>
      
      <Link href="/services" className="inline-block bg-cyan-500 text-white font-bold py-2 px-4 rounded hover:bg-cyan-600 transition-colors duration-300">
        &larr; Kembali
      </Link>
    </div>
  );
}


export async function generateStaticParams() {
    return Object.keys(serviceDetails).map((slug) => ({
        slug: slug,
    }));
}

export default ServiceDetailPage;