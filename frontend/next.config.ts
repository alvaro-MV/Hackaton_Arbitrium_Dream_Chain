import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		ignoreDuringBuilds: true,
	},

	webpack: (config, { isServer }) => {
		if (!isServer) {
		config.resolve.fallback = {
			fs: false,
		};
		}

		return config;
	},
};

export default nextConfig;
