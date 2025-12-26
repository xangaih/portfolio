/** @type {import('next').NextConfig} */
const nextConfig = {
    // Removing 'output: export' to use server-side rendering instead of static export
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['localhost'],
        unoptimized: true
    }
};

export default nextConfig;
