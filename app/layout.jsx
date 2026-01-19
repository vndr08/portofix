import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

export const metadata = {
    metadataBase: new URL("http://localhost:9000"),
    title: "Ivan's Portfolio | Application Support & AI Developer",

    description:
		"Ivander Johana Pratama - Application Support & AI Agent Developer at PT Jababeka. Final year Information Systems student at President University specializing in Data Science.",

    author: "Ivander Johana Pratama",
    siteUrl: "https://ivan-porto.id",
    applicationName: "Ivan's Portfolio",

    keywords: [
		"ivander",
		"ivan johana",
		"pratama",
		"ai developer",
		"application support",
		"data science",
		"pt jababeka",
		"president university",
		"ivan portfolio",
	],

    openGraph: {
		type: "website",
		url: "https://ivan-porto.id",
		title: "Ivan's Portfolio | Application Support & AI Developer",
		site_name: "Ivan's Portfolio",
		description: "Ivander Johana Pratama - Application Support Intern & AI Developer showcasing 9 projects and expertise in full-stack development and machine learning.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Ivan Johana Pratama Portfolio",
			},
		],
		site_name: "Ivan's Portfolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				<Chat />
				<Analytics />
			</body>
		</html>
	);
}
