"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const TrackingPage = () => {
  const router = useRouter();
  const [orderId, setOrderId] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Simulasi Fungsi Cek Transaksi
  const handleTracking = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulasi delay API
    setTimeout(() => {
      // Data dummy hasil pencarian
      setSearchResult({
        id: orderId,
        game: "Mobile Legends",
        item: "966 Diamonds",
        price: "Rp 245.000",
        status: "Berhasil", // Bisa: "Pending", "Proses", "Berhasil", "Gagal"
        date: "1 Mei 2026, 17:45 WIB",
        payment: "GoPay"
      });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#020617] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.back()}
          className="mb-8 flex items-center gap-2 text-slate-400 hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          <span className="text-sm font-bold">Kembali</span>
        </button>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-black mb-3">Lacak Pesanan 🔍</h1>
          <p className="text-slate-400">Masukkan ID Transaksi Anda untuk mengecek status pesanan secara real-time.</p>
        </div>

        {/* Form Input */}
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl mb-8">
          <form onSubmit={handleTracking} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">ID Transaksi / Nomor Invoice</label>
              <input 
                type="text" 
                required
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Contoh: GV-123456789"
                className="w-full bg-slate-800 border border-slate-700 text-white px-5 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition placeholder:text-slate-600"
              />
            </div>
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-black py-4 rounded-2xl transition duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              ) : "Cek Status Pesanan"}
            </button>
          </form>
        </div>

        {/* Hasil Pencarian (Conditional Rendering) */}
        {searchResult && (
          <div className="bg-slate-900 border border-blue-500/30 p-8 rounded-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-8 pb-6 border-b border-slate-800">
              <div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Status Transaksi</p>
                <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase ${
                  searchResult.status === 'Berhasil' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  ● {searchResult.status}
                </span>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">ID Pesanan</p>
                <p className="font-mono text-blue-400 font-bold">{searchResult.id}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-sm">
              <div>
                <p className="text-slate-500 mb-1">Nama Game</p>
                <p className="font-bold text-slate-200">{searchResult.game}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Item / Nominal</p>
                <p className="font-bold text-slate-200">{searchResult.item}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Metode Pembayaran</p>
                <p className="font-bold text-slate-200">{searchResult.payment}</p>
              </div>
              <div>
                <p className="text-slate-500 mb-1">Waktu Transaksi</p>
                <p className="font-bold text-slate-200">{searchResult.date}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex justify-between items-center">
              <span className="text-slate-400">Total Bayar</span>
              <span className="text-xl font-black text-white">{searchResult.price}</span>
            </div>
          </div>
        )}

        {/* Footer Info */}
        <p className="text-center text-slate-500 text-xs mt-12">
          Butuh bantuan? <a href="#" className="text-blue-500 hover:underline">Hubungi Customer Service</a>
        </p>

      </div>
    </div>
  );
};

export default TrackingPage;