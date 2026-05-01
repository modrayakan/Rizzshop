import React from 'react';

const categories = [
  { id: 1, name: 'Action', count: '120 Games', icon: '⚔️', color: 'bg-red-500' },
  { id: 2, name: 'RPG', count: '85 Games', icon: '🧙', color: 'bg-purple-500' },
  { id: 3, name: 'Racing', count: '45 Games', icon: '🏎️', color: 'bg-blue-500' },
  { id: 4, name: 'Strategy', count: '60 Games', icon: '🧠', color: 'bg-green-500' },
  { id: 5, name: 'Horror', count: '30 Games', icon: '👻', color: 'bg-gray-800' },
  { id: 6, name: 'Sports', count: '55 Games', icon: '⚽', color: 'bg-orange-500' },
];

const GameCategoryPage = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      {/* Header Section */}
      <header className="max-w-7xl mx-auto mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          Jelajahi <span className="text-blue-500">Kategori</span>
        </h1>
        <p className="text-gray-400 text-lg">Temukan game favoritmu berdasarkan genre terbaik.</p>
      </header>

      {/* Search & Filter Simple */}
      <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
        <input 
          type="text" 
          placeholder="Cari kategori..." 
          className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-xl w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Grid Kategori */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div 
            key={cat.id} 
            className="group relative overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-all duration-300 cursor-pointer"
          >
            <div className="p-8 flex items-center justify-between">
              <div>
                <div className={`w-12 h-12 ${cat.color} rounded-lg flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold">{cat.name}</h3>
                <p className="text-slate-400 mt-1">{cat.count}</p>
              </div>
              
              {/* Dekorasi Panah */}
              <div className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>

            {/* Efek Hover Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>

      {/* Trending Section Placeholder */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Populer Minggu Ini</h2>
          <button className="text-blue-500 hover:text-blue-400 font-medium">Lihat Semua</button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="aspect-[3/4] bg-slate-800 rounded-xl animate-pulse">
               <div className="h-full w-full flex items-center justify-center text-slate-600 text-sm italic">
                 Game Poster
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameCategoryPage;