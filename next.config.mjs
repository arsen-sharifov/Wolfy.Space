/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            config.optimization.moduleIds = 'named';
        }
        return config;
    }
};

export default nextConfig;