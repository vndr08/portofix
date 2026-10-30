import data from "@/json/data.json";
import profile from "@/json/profile.json";

const escapeXml = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&apos;");

export async function GET() {
  const siteUrl = profile.canonicalUrl.replace(/\/$/, "");
  const projects = data.Projects.filter((project) => project.show);
  const rssItems = projects
    .map(
      (project) => `
    <item>
      <title>${escapeXml(project.title)}</title>
      <link>${siteUrl}/projects/${escapeXml(project.slug)}</link>
      <guid isPermaLink="true">${siteUrl}/projects/${escapeXml(project.slug)}</guid>
      <description>${escapeXml(project.summary || project.desc?.[0] || "")}</description>
      <dc:creator>${escapeXml(profile.name)}</dc:creator>
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Ivander Portfolio — Project Feed</title>
    <link>${siteUrl}</link>
    <description>AI, software engineering, and operational product work by ${escapeXml(profile.name)}.</description>
    <language>en-us</language>
    <managingEditor>${escapeXml(profile.email)} (${escapeXml(profile.name)})</managingEditor>
    <webMaster>${escapeXml(profile.email)} (${escapeXml(profile.name)})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <ttl>1440</ttl>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
