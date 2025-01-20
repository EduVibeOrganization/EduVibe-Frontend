import { NextConfig } from "next";

const nextConfig : NextConfig = {
    images: {
        domains: ["elordenmundial.com", "cdn.eduonix.com","tse1.mm.bing.net","ceprofesional.com", "www.opus-software.com.br", "cdn.prod.website-files.com", "learn.microsoft.com"],
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
