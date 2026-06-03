import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import profile from "@/json/profile.json";

const siteUrl = profile.canonicalUrl;
const title = `${profile.name} | ${profile.headline}`;
const description =
	"Ivander Johana Pratama builds AI automation, enterprise software support tools, and full-stack dashboards for practical business workflows.";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	applicationName: "Ivan's Portfolio",
	authors: [{ name: profile.name, url: siteUrl }],
	alternates: {
		canonical: "/",
	},
	keywords: [
		"ivander",
		"ivander johana pratama",
		"ai engineer",
		"software engineer",
		"full stack engineer",
		"application support",
		"data science",
		"pt jababeka",
		"president university",
		"portfolio",
	],
	openGraph: {
		type: "website",
		url: siteUrl,
		title,
		siteName: "Ivan's Portfolio",
		description,
		images: [
			{
				url: "/opengraph-image",
				width: 1200,
				height: 630,
				alt: `${profile.name} portfolio preview`,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: ["/opengraph-image"],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="light" suppressHydrationWarning>
			<head>
				<ThemeScript />
			</head>
			<body>
				<Navbar />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
