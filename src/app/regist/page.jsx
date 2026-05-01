import React from 'react';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] p-6">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Buat Akun</h2>
          <p className="text-slate-400 mt-2 text-sm">
            Bergabunglah dengan komunitas gamer sekarang.
          </p>
        </div>

        <form className="space-y-5">
          {/* Input Nama Lengkap */}
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="name">
              Nama Lengkap
            </label>
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-slate-500"
              type="text"
              id="name"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-slate-500"
              type="email"
              id="email"
              placeholder="nama@email.com"
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <label className="block text-slate-300 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full bg-slate-800 border border-slate-700 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 placeholder-slate-500"
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
            <p className="text-[10px] text-slate-500 mt-1 italic">
              Minimal 8 karakter dengan kombinasi angka dan huruf.
            </p>
          </div>

          {/* Checkbox Syarat & Ketentuan */}
          <div className="flex items-start gap-2">
            <input 
              type="checkbox" 
              id="terms" 
              className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-800 text-blue-600 focus:ring-blue-500"
              required 
            />
            <label htmlFor="terms" className="text-xs text-slate-400 leading-tight">
              Saya setuju dengan <span className="text-blue-500 hover:underline cursor-pointer">Syarat & Ketentuan</span> serta <span className="text-blue-500 hover:underline cursor-pointer">Kebijakan Privasi</span> yang berlaku.
            </label>
          </div>

          {/* Tombol Register */}
          <button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition duration-300 transform hover:scale-[1.01] active:scale-95 shadow-lg shadow-blue-900/20"
            type="submit"
          >
            Daftar Sekarang
          </button>
        </form>

        {/* Separator */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-slate-900 px-2 text-slate-500">Atau daftar dengan</span>
          </div>
        </div>

        {/* Google Signup */}
        <button className="w-full bg-transparent border border-slate-700 text-slate-300 font-medium py-3 px-4 rounded-xl hover:bg-slate-800 transition duration-200 flex items-center justify-center gap-3">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" className="h-5 w-5" />
          <span>Google</span>
        </button>

        {/* Login Link */}
        <p className="text-center text-slate-400 text-sm mt-8">
          Sudah punya akun?{' '}
          <a href="/Login" className="text-blue-500 font-bold hover:underline hover:text-blue-400 transition">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;