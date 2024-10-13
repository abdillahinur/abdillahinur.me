/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    // Enable the App Router
    experimental: {
      appDir: true,
    },
    // Optionally, add image domains if you're using Next.js Image component with external images
    images: {
      domains: ['example.com'], // Add domains you'll be loading images from
    },
    // If you're using TypeScript, you might want to add this for better type checking
    typescript: {
      ignoreBuildErrors: false,
    },
  };
  
  export default nextConfig;