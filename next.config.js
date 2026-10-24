const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

const config = {
	// your Next.js configuration
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
		// Add image optimization settings
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 60,
	},
	async redirects() {
		return [
			{ source: "/case-studies", destination: "/projects", permanent: true },
			{ source: "/case-studies/ai-chatbot-jababeka", destination: "/projects/jababeka-chatbot", permanent: true },
			{ source: "/case-studies/duplicate-detection-system", destination: "/projects/duplicate-detection", permanent: true },
			{ source: "/case-studies/financial-dashboard", destination: "/projects", permanent: true },
		];
	},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{
						key: "Content-Type",
						value: "application/gzip",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=3600", // Cache for 1 hour
					},
				],
			},
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
				],
			},
		];
	},
	// Add performance optimizations
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
};

module.exports = process.env.ANALYZE === "true" ? withBundleAnalyzer(config) : config;
