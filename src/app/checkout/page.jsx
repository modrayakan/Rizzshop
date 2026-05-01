import React from 'react';

const CheckoutPage = () => {
  // Data dummy item yang akan dibeli
  const cartItems = [
    {
      id: 1,
      title: "Elden Ring: Shadow of the Erdtree",
      category: "Expansion",
      price: 599000,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070"
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.11; // PPN 11%
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-[#020617] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold">Checkout</h1>
          <p className="text-slate-400 mt-2">Selesaikan pembayaran untuk mulai bermain.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Kolom Kiri: Form Detail Pengiriman & Pembayaran */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bagian 1: Informasi Kontak */}
            <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Informasi Akun
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Nama Lengkap</label>
                  <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
                </div>
              </div>
            </section>

            {/* Bagian 2: Metode Pembayaran */}
            <section className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Metode Pembayaran
              </h2>
              
              <div className="space-y-4">
                {/* Opsi E-Wallet */}
                <label className="flex items-center justify-between p-4 bg-slate-800 border border-blue-500 rounded-xl cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-black font-bold italic">G</div>
                    <div>
                      <p className="font-bold">GoPay / E-Wallet</p>
                      <p className="text-xs text-slate-400">Proses instan & aman</p>
                    </div>
                  </div>
                  <input type="radio" name="payment" defaultChecked className="w-5 h-5 accent-blue-500" />
                </label>

                {/* Opsi Virtual Account */}
                <label className="flex items-center justify-between p-4 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-slate-500 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center text-white text-xs text-center font-bold">VA</div>
                    <div>
                      <p className="font-bold">Virtual Account</p>
                      <p className="text-xs text-slate-400">Transfer bank otomatis</p>
                    </div>
                  </div>
                  <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                </label>

                {/* Opsi Credit Card */}
                <label className="flex items-center justify-between p-4 bg-slate-800 border border-slate-700 rounded-xl cursor-pointer hover:border-slate-500 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-700 rounded-md flex items-center justify-center text-white text-xs text-center font-bold">CC</div>
                    <div>
                      <p className="font-bold">Kartu Kredit / Debit</p>
                      <p className="text-xs text-slate-400">Visa, Mastercard, JCB</p>
                    </div>
                  </div>
                  <input type="radio" name="payment" className="w-5 h-5 accent-blue-500" />
                </label>
              </div>
            </section>
          </div>

          {/* Kolom Kanan: Ringkasan Pesanan (Sticky) */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 sticky top-12">
              <h2 className="text-xl font-bold mb-6">Ringkasan Pesanan</h2>
              
              {/* List Produk */}
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm leading-tight">{item.title}</h4>
                      <p className="text-xs text-slate-400 mt-1">{item.category}</p>
                      <p className="text-blue-400 font-bold mt-1 text-sm">Rp {item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-8">
                <input type="text" className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2 text-sm outline-none" placeholder="Kode Promo" />
                <button className="bg-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-600 transition">Gunakan</button>
              </div>

              {/* Kalkulasi Harga */}
              <div className="space-y-3 border-t border-slate-800 pt-6">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span>Rp {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>PPN (11%)</span>
                  <span>Rp {tax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-black mt-2">
                  <span>Total</span>
                  <span className="text-blue-500">Rp {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Tombol Bayar */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] mt-8 flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Bayar Sekarang
              </button>

              <p className="text-center text-xs text-slate-500 mt-6">
                Transaksi Anda dilindungi dengan enkripsi SSL 256-bit.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;