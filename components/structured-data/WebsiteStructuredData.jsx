export default function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ivander Portfolio",
    url: "https://ivanderjp.vercel.app",
    description: "AI Engineer, Software Engineer, and Full Stack Engineer portfolio showcasing AI automation, enterprise software support tools, and full-stack dashboards for practical business workflows.",
    author: {
      "@type": "Person",
      name: "Ivander Johana Pratama",
      email: "ivanderjohanapratama@gmail.com",
      url: "https://ivanderjp.vercel.app"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ivanderjp.vercel.app/projects?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
