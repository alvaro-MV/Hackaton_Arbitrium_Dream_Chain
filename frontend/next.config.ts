import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
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
