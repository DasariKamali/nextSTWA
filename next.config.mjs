/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization if needed for static hosting
  },
  basePath: '/blog', // This ensures the app is hosted at /blog
  trailingSlash: true, // Optional: Helps avoid issues with paths
};

export default nextConfig;
