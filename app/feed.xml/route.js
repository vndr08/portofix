export async function GET() {
  const siteUrl = "https://ivanderjp.vercel.app";
  const siteName = "Ivander Portfolio";
  const authorName = "Ivander Johana Pratama";
  const authorEmail = "ivanderjohanapratama@gmail.com";

  // Sample blog posts - in production, fetch from your data source
  const posts = [
    {
      slug: "building-ai-chatbot-with-langchain",
      title: "Building an AI Chatbot with LangChain and FastAPI",
      excerpt: "A practical guide to building production-ready AI chatbots using LangChain for orchestration and FastAPI for the backend API.",
      date: "2025-12-15",
      author: authorName,
    },
    {
      slug: "nextjs-performance-optimization",
      title: "Next.js Performance Optimization Techniques",
      excerpt: "Essential tips and tricks to make your Next.js applications blazing fast.",
      date: "2025-11-20",
      author: authorName,
    },
    {
      slug: "enterprise-software-development-lessons",
      title: "Lessons from Enterprise Software Development",
      excerpt: "Key takeaways from working on enterprise applications.",
      date: "2025-10-10",
      author: authorName,
    },
  ];

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author:${authorEmail}>${post.author}</author:${authorEmail}>
      <dc:creator><![CDATA[${post.author}]]></dc:creator>
    </item>`
    )
    .join("\n");

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${siteName}</title>
    <link>${siteUrl}</link>
    <description>AI Engineer, Software Engineer, and Full Stack Engineer portfolio - Technical blog and insights</description>
    <language>en-us</language>
    <managingEditor>${authorEmail} (${authorName})</managingEditor>
    <webMaster>${authorEmail} (${authorName})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <ttl>60</ttl>
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
