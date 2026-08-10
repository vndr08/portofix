// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");
const data = require("./json/data.json");
const profile = require("./json/profile.json");

const hostname = profile.canonicalUrl.replace(/\/$/, "");

// Last modified date for static pages
const lastModified = new Date().toISOString();

async function generateSitemap() {
	const sitemap = new SitemapStream({
		hostname,
		lastmod: lastModified,
		changefreq: "weekly",
		priority: 0.8,
	});

	// Main pages with higher priority
	sitemap.write({
		url: "/",
		changefreq: "weekly",
		priority: 1.0,
		lastmod: lastModified,
		links: [
			{ lang: "en", url: "/" },
		],
	});

	sitemap.write({
		url: "/about",
		changefreq: "monthly",
		priority: 0.8,
		lastmod: lastModified,
	});

	sitemap.write({
		url: "/projects",
		changefreq: "weekly",
		priority: 0.9,
		lastmod: lastModified,
	});

	sitemap.write({
		url: "/projects/archive",
		changefreq: "monthly",
		priority: 0.6,
		lastmod: lastModified,
	});

	// Project pages with dynamic priorities
	data.Projects.filter((project) => project.show).forEach((project) => {
		sitemap.write({
			url: `/projects/${project.slug}`,
			changefreq: "monthly",
			priority: project.featured ? 0.85 : 0.7,
			lastmod: lastModified,
			images: project.thumbnail ? [
				{
					url: `${hostname}${project.thumbnail}`,
					title: project.title,
					caption: project.summary || project.desc[0],
				},
			] : [],
		});
	});

	sitemap.end();

	const sitemapXML = await streamToPromise(sitemap);
	const gzippedSitemap = await new Promise((resolve, reject) => {
		const gzip = createGzip();
		const chunks = [];
		gzip.on("data", (chunk) => chunks.push(chunk));
		gzip.on("end", () => resolve(Buffer.concat(chunks)));
		gzip.on("error", reject);
		gzip.end(sitemapXML);
	});

	fs.writeFileSync("./public/sitemap.xml.gz", gzippedSitemap);

	// Also generate uncompressed sitemap.xml for debugging
	fs.writeFileSync("./public/sitemap.xml", sitemapXML.toString());

	console.log("Sitemap generated successfully!");
	console.log(`- Total pages: ${data.Projects.filter((p) => p.show).length + 4}`);
	console.log(`- Featured projects: ${data.Projects.filter((p) => p.featured).length}`);
}

generateSitemap();
