import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ["res.cloudinary.com", "cdn.eduonix.com"],
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/courses",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
