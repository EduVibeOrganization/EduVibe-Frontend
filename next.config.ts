import { NextConfig } from "next";

const nextConfig : NextConfig = {
    images: {
        domains: ["elordenmundial.com", "cdn.eduonix.com","tse1.mm.bing.net","ceprofesional.com"],
    },
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/sign-in",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
