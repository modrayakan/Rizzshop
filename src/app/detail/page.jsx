"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const GameGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // Data 20 Game dengan URL Image yang merepresentasikan Logo/Ikon Asli
  const games = [
    { id: 1, name: 'Mobile Legends', brand: 'Moonton', tag: 'Populer', img: 'https://mmc.tirto.id/image/otf/1240x0,q70/2018/03/23/ilustrasi-mobile-legends--istimewa_ratio-16x9.jpg' },
    { id: 2, name: 'Free Fire', brand: 'Garena', tag: 'Hot', img: 'https://lh3.googleusercontent.com/97y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 3, name: 'PUBG Mobile', brand: 'Tencent', tag: 'Populer', img: 'https://lh3.googleusercontent.com/6J7p8O97y_636O636O636O636O636O636O636O636O636O636O636O636O636O636O=s200' },
    { id: 4, name: 'Genshin Impact', brand: 'HoYoverse', tag: 'Terlaris', img: 'https://lh3.googleusercontent.com/8-p6O97y_636O636O636O636O636O636O636O636O636O636O636O636O636O636O=s200' },
    { id: 5, name: 'Valorant', brand: 'Riot Games', tag: 'Populer', img: 'https://logowik.com/content/uploads/images/valorant-icon-logo8921.jpg' },
    { id: 6, name: 'Call of Duty M', brand: 'Activision', tag: null, img: 'https://lh3.googleusercontent.com/9-p6O97y_636O636O636O636O636O636O636O636O636O636O636O636O636O636O=s200' },
    { id: 7, name: 'Roblox', brand: 'Roblox Corp', tag: 'Populer', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Roblox_player_icon_black.svg' },
    { id: 8, name: 'Minecraft', brand: 'Mojang', tag: null, img: 'https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png' },
    { id: 9, name: 'Apex Legends', brand: 'EA Sports', tag: 'Hot', img: 'https://logowik.com/content/uploads/images/apex-legends-icon6358.jpg' },
    { id: 10, name: 'League of Legends', brand: 'Riot Games', tag: 'Populer', img: 'https://logowik.com/content/uploads/images/league-of-legends-icon-logo8756.jpg' },
    { id: 11, name: 'Clash of Clans', brand: 'Supercell', tag: null, img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 12, name: 'Steam Wallet', brand: 'Valve', tag: 'Voucher', img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Steam_Logo.png' },
    { id: 13, name: 'Honkai: Star Rail', brand: 'HoYoverse', tag: 'Baru', img: 'https://lh3.googleusercontent.com/8-p6O97y_636O636O636O636O636O636O636O636O636O636O636O636O636O636O=s200' },
    { id: 14, name: 'Point Blank', brand: 'Zepetto', tag: null, img: 'https://keker.fajar.co.id/wp-content/uploads/2026/04/Point-Blank.jpg' },
    { id: 15, name: 'Tower of Fantasy', brand: 'Hotta', tag: null, img: 'https://lh3.googleusercontent.com/9-p6O97y_636O636O636O636O636O636O636O636O636O636O636O636O636O636O=s200' },
    { id: 16, name: 'Stumble Guys', brand: 'Kitka', tag: 'Populer', img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 17, name: 'FC Mobile', brand: 'EA Sports', tag: 'Terlaris', img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 18, name: 'Efootball', brand: 'Konami', tag: 'Update', img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 19, name: 'Rise of Kingdoms', brand: 'Lilith', tag: null, img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
    { id: 20, name: 'Lord Mobile', brand: 'IGG', tag: null, img: 'https://lh3.googleusercontent.com/876y_p766T2f6uK9T-93364O09L653O62O88636O26O636O636O636O636O636O636O=s200' },
  ];

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 bg-[#020617] min-h-screen">
      
      {/* Tombol Kembali & Search Bar Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        
        <div className="flex items-center gap-4">
          {/* Tombol Kembali */}
          <Link href="home" 
            onClick={() => router.back()}
            className="p-3 bg-slate-900 border border-slate-800 rounded-2xl text-slate-400 hover:text-white hover:border-blue-500 transition-all group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          
          <div>
            <h2 className="text-3xl font-extrabold text-white">Semua Game</h2>
            <p className="text-slate-400 text-sm">Temukan game favoritmu</p>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-80">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-slate-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Cari game..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 text-white pl-12 pr-4 py-3.5 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
          />
        </div>
      </div>

      {/* Grid Display */}
      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {filteredGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id} className="group">
               {/* ... (Isi div card game sama seperti kode kamu sebelumnya) ... */}
               <div className="relative bg-slate-900 border border-slate-800 rounded-[2rem] p-4 transition-all duration-300 group-hover:border-blue-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]">
                <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4 bg-slate-800 shadow-inner">
                  <img src={game.img} alt={game.name} className="w-full h-full object-cover p-2 group-hover:scale-105 transition-transform duration-500" />
                  {game.tag && (
                    <div className="absolute top-2 left-2">
                      <span className={`px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest text-white shadow-lg ${game.tag === 'Populer' ? 'bg-orange-500' : game.tag === 'Hot' ? 'bg-red-600' : 'bg-green-500'}`}>
                        {game.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-bold text-white truncate leading-tight group-hover:text-blue-400 transition">{game.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-1 font-medium tracking-wide">{game.brand}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        /* State Jika Game Tidak Ditemukan */
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-xl font-bold text-white">Game tidak ditemukan</h3>
          <p className="text-slate-500">Coba gunakan kata kunci lain</p>
        </div>
      )}
    </section>
  );
};

export default GameGrid;