"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const HomePage = () => {
  const popularGames = [
    { id: 1, title: "Mobile Legends", dev: "Moonton", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400", discount: "10%", type: "populer" },
    { id: 2, title: "Free Fire", dev: "Garena", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=400", discount: "5%", type: "populer" },
    { id: 3, title: "Genshin Impact", dev: "HoYoverse", img: "https://images.unsplash.com/photo-1614027164847-1b2800690736?q=80&w=400", discount: null, type: "populer" },
    { id: 4, title: "Valorant", dev: "Riot Games", img: "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=400", discount: "Hot", type: "populer" },
    { id: 5, title: "PUBG Mobile", dev: "Tencent", img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400", discount: "15%", type: "populer" },
    { id: 6, title: "Steam Wallet", dev: "Valve", img: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=400", discount: null, type: "populer" },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("ProGamer99");

  return (
    <div className="min-h-screen bg-[#020617] text-white font-sans">
      {/* Navbar Minimalis */}
      <nav className="border-b border-slate-800 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* LOGO */}
          <Link href="/" className="text-2xl font-black text-blue-500 tracking-tighter italic">
            GAMEVAULT
          </Link>

          {/* MENU NAVIGASI (Desktop) */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
            <Link href="/home" className="hover:text-blue-500 transition">Beranda</Link>
            <Link href="/detail" className="hover:text-blue-500 transition">Game</Link>
            <Link href="/checkout" className="hover:text-blue-500 transition">Cek Transaksi</Link>
          </div>

          {/* KONDISI TOMBOL LOGIN / USERNAME */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="flex items-center gap-3 bg-slate-800/50 py-1 pl-4 pr-1 rounded-full border border-slate-700">
                <span className="text-sm font-semibold text-blue-400">{username}</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white">
                  {username.charAt(0)}
                </div>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="text-[10px] text-slate-500 hover:text-red-400 ml-2 mr-2 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link href="/Login" className="px-5 py-2 text-sm font-bold text-slate-300 hover:text-blue-400 transition">Masuk</Link>
                <Link href="/regist" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-blue-900/20">Daftar</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section / Banner */}
      <header className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative h-64 md:h-96 w-full rounded-3xl overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070" 
            className="w-full h-full object-cover" 
            alt="Banner Promo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex flex-col justify-center px-12">
            <span className="bg-yellow-500 text-black text-[10px] font-bold px-2 py-1 rounded-md w-fit mb-4">PROMO MEI</span>
            <h2 className="text-3xl md:text-5xl font-black max-w-md leading-tight">Top Up Diamond MLBB Diskon 20%</h2>
            <button className="mt-6 bg-white text-blue-900 font-bold px-6 py-3 rounded-xl w-fit hover:bg-blue-50 transition">Cek Sekarang</button>
          </div>
        </div>
      </header>

      {/* Filter Buttons Section (Tanpa Search Bar) */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex gap-4">
          <button className="bg-blue-600 px-8 py-3 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-900/20">
            🔥 Populer
          </button>
          <button className="bg-slate-900 border border-slate-800 px-8 py-3 rounded-xl text-sm font-bold hover:bg-slate-800 transition">
            🏷️ Diskon
          </button>
        </div>
      </section>

      {/* Game Grid Section */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="text-2xl font-bold tracking-tight">Layanan Terpopuler</h3>
            <p className="text-slate-400 text-sm">Pilih game favoritmu untuk top up instan.</p>
          </div>
          <Link href="/detail" className="text-blue-500 font-bold text-sm hover:underline">Lihat Semua</Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {popularGames.map((game) => (
            <Link href={`/games/${game.id}`} key={game.id} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-3 border-2 border-transparent group-hover:border-blue-500 transition-all shadow-lg">
                <img src={game.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={game.title} />
                {game.discount && (
                  <div className="absolute top-2 right-2 bg-red-600 text-[10px] font-black px-2 py-1 rounded-md shadow-lg">
                    {game.discount}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-[10px] font-bold bg-blue-600 w-full text-center py-2 rounded-lg">TOP UP</span>
                </div>
              </div>
              <h4 className="font-bold text-sm truncate group-hover:text-blue-400 transition">{game.title}</h4>
              <p className="text-xs text-slate-500">{game.dev}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="text-2xl font-black text-blue-500 italic mb-4">GAMEVAULT</div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Platform top up game tercepat dan terpercaya di Indonesia. Otomatis masuk dalam hitungan detik, tersedia 24 jam.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-4 italic text-slate-200">Bantuan & Dukungan</h5>
            <ul className="text-slate-400 text-sm space-y-2">
              <li><Link href="#" className="hover:text-white transition">Hubungi WhatsApp</Link></li>
              <li><Link href="#" className="hover:text-white transition">Pertanyaan Umum (FAQ)</Link></li>
              <li><Link href="#" className="hover:text-white transition">Metode Pembayaran</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-4 italic text-slate-200">Ikuti Kami</h5>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-xs font-bold">IG</div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-xs font-bold">TT</div>
              <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center hover:bg-blue-600 transition cursor-pointer text-xs font-bold">FB</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;