import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import RouteKinetics from "@/components/RouteKinetics";
import { PersonStructuredData, WebsiteStructuredData } from "@/components/structured-data";
import { Analytics } from "@vercel/analytics/react";
import { PWAProvider } from "@/components/PWAProvider";
import profile from "@/json/profile.json";

const siteUrl = profile.canonicalUrl;
const siteName = "Ivander Portfolio";
const title = `${profile.name} | ${profile.headline}`;
const description =
	"Ivander Johana Pratama builds AI-powered products and enterprise systems end-to-end, from product requirements to operational rollout.";
const imageUrl = `${siteUrl}/opengraph-image`;
const twitterHandle = "@ivanderjp";
const linkedInUrl = "https://linkedin.com/in/ivanderjohanapratama";
const githubUrl = "https://github.com/vndr08";

export const metadata = {
	metadataBase: new URL(siteUrl),
	title,
	description,
	applicationName: siteName,
	authors: [{ name: profile.name, url: siteUrl }],
	creator: profile.name,
	publisher: profile.name,
	alternates: {
		canonical: "/",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	keywords: [
		"ivander",
		"ivander johana pratama",
		"ai engineer",
		"software engineer",
		"product engineering",
		"application support",
		"data science",
		"pt jababeka",
		"president university",
		"portfolio",
		"langchain",
		"fastapi",
		"nextjs",
		"machine learning",
		"python",
		"jakarta",
		"indonesia",
	],
	categories: ["technology", "software", "ai"],
	openGraph: {
		type: "website",
		url: siteUrl,
		title,
		description,
		siteName,
		images: [
			{
				url: imageUrl,
				width: 1200,
				height: 630,
				alt: `${profile.name} portfolio preview`,
				type: "image/png",
			},
		],
		videos: [],
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title,
		description,
		images: [imageUrl],
		site: twitterHandle,
		creator: twitterHandle,
	},
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Ivan.dev",
	},
	icons: {
		icon: [{ url: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
		apple: [{ url: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
	},
};

export const viewport = {
	width: "device-width",
	initialScale: 1,
	viewportFit: "cover",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="light" suppressHydrationWarning>
			<head>
				<ThemeScript />
				<PersonStructuredData />
				<WebsiteStructuredData />
				<link rel="alternate" type="application/rss+xml" title={`${siteName} RSS Feed`} href="/feed.xml" />
				<link rel="me" href={linkedInUrl} />
				<link rel="me" href={githubUrl} />
			</head>
			<body>
				<PWAProvider>
					<ScrollProgress />
					<RouteKinetics />
					<BackToTop />
					<a href="#main-content" className="system-skip-link">
						Skip to main content
					</a>
					<Navbar />
					<div id="main-content" tabIndex={-1}>
						{children}
					</div>
					{process.env.VERCEL ? <Analytics /> : null}
				</PWAProvider>
			</body>
		</html>
	);
}
