const About: React.FC = () => {
  return (
    <div className="space-y-16 animate-fade-in">

      
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-cyan-400 mb-4">Tentang kenaTech</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-300">
          Di kenaTech, misi kami adalah memberdayakan bisnis melalui solusi teknologi inovatif yang dirancang untuk mengakselerasi pertumbuhan dan efisiensi di era digital. Kami berkomitmen untuk memberikan layanan berkualitas tinggi yang menggabungkan keahlian teknis dengan pemahaman mendalam tentang kebutuhan unik setiap klien.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center text-white mb-10">Kelebihan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            
            <svg className="w-16 h-16 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
            <h3 className="text-2xl font-bold text-white mb-2">Inovasi</h3>
            <p className="text-gray-400">Kami memberikan inovasi mengenai teknologi dengan tanpa batas dan tak ada akhrinya</p>
          </div>
          
         
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            
            <svg className="w-16 h-16 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <h3 className="text-2xl font-bold text-white mb-2">Kualitas</h3>
            <p className="text-gray-400">Kami akan membantu setiap pelanggan kami tanpa lelah dan selalu memberikan pelayanan yang terbaik</p>
          </div>

          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            
            <svg className="w-16 h-16 mx-auto mb-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            <h3 className="text-2xl font-bold text-white mb-2">Kolaborasi</h3>
            <p className="text-gray-400">Kami percaya setiap hubungan ataupun kerjasama yang kita lakukan akan mendapatkan hasil yang terbaik.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default About;