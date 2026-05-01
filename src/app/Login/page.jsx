"use client";

import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] shadow-2xl w-full max-w-md">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-black text-white tracking-tight">MASUK</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Masuk untuk melanjutkan top up game favoritmu.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Input Email */}
          <div>
            <label className="block text-slate-300 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder:text-slate-600"
              type="email"
              placeholder="nama@email.com"
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-slate-300 text-sm font-bold">
                Password
              </label>
              <Link href="#" className="text-xs text-blue-500 hover:underline">Lupa?</Link>
            </div>
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3.5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder:text-slate-600"
              type="password"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Tombol Login */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 px-4 rounded-2xl transition duration-300 transform active:scale-95 shadow-lg shadow-blue-900/20"
            type="submit"
          >
            MASUK SEKARANG
          </button>
        </form>

        {/* Link ke Page Registrasi */}
        <p className="text-center text-slate-400 text-sm mt-8">
          Belum punya akun?{' '}
          <Link 
            href="/regist" 
            className="text-blue-500 font-bold hover:text-blue-400 transition underline-offset-4 hover:underline"
          >
            Daftar Disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;