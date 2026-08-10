import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeScript from "@/components/ThemeScript";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import { PersonStructuredData, WebsiteStructuredData, ProfessionalServiceStructuredData } from "@/components/structured-data";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
import { PWAProvider } from "@/components/PWAProvider";
import profile from "@/json/profile.json";

const siteUrl = profile.canonicalUrl;
const siteName = "Ivander Portfolio";
const title = `${profile.name} | ${profile.headline}`;
const description =
	"Ivander Johana Pratama builds AI automation, enterprise software support tools, and full-stack dashboards for practical business workflows.";
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
		"full stack engineer",
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
		"cikarang",
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
	verification: {
		google: "your-google-verification-code",
	},
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: "Ivan.dev",
	},
	icons: {
		icon: [
			{ url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
		],
		apple: [
			{ url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
			{ url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
		],
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="light" suppressHydrationWarning>
			<head>
				<ThemeScript />
				<PersonStructuredData />
				<WebsiteStructuredData />
				<ProfessionalServiceStructuredData />
				<link rel="alternate" type="application/rss+xml" title={`${siteName} RSS Feed`} href="/feed.xml" />
				<link rel="me" href={linkedInUrl} />
				<link rel="me" href={githubUrl} />
			</head>
			<body>
				<PWAProvider>
					<ScrollProgress />
					<BackToTop />
					<a
						href="#main-content"
						className="sr-only left-4 top-4 z-[100] rounded-lg bg-emerald-500 px-4 py-2 text-white focus:not-sr-only focus:absolute">
						Skip to main content
					</a>
					<Navbar />
					<main id="main-content" tabIndex={-1}>
						{children}
					</main>
					<Analytics />
				</PWAProvider>
			</body>
		</html>
	);
}
