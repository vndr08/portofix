export default function WebsiteStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ivander Portfolio",
    url: "https://ivanderjp.vercel.app",
    description: "AI Engineer and Software Engineer portfolio showcasing AI-powered products, enterprise systems, and operational software delivery.",
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
