/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Mengizinkan semua website untuk ambil gambar
      },
    ],
  },
};

export default nextConfig;