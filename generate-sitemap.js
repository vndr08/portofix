// sitemap-generator.js
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");
const data = require("./json/data.json");
const profile = require("./json/profile.json");

const hostname = profile.canonicalUrl.replace(/\/$/, "");

async function generateSitemap() {
	const sitemap = new SitemapStream({ hostname });

	sitemap.write({ url: "/", changefreq: "weekly", priority: 1.0 });
	sitemap.write({ url: "/about", changefreq: "monthly", priority: 0.8 });
	sitemap.write({ url: "/projects", changefreq: "weekly", priority: 0.9 });
	sitemap.write({
		url: "/projects/archive",
		changefreq: "monthly",
		priority: 0.6,
	});

	data.Projects.filter((project) => project.show).forEach((project) => {
		sitemap.write({
			url: `/projects/${project.slug}`,
			changefreq: "monthly",
			priority: project.featured ? 0.8 : 0.7,
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
}

generateSitemap();
