export default function PersonStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ivander Johana Pratama",
    jobTitle: "AI Engineer and Software Engineer",
    email: "ivanderjohanapratama@gmail.com",
    telephone: "+62 821 7515 4739",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID"
    },
    url: "https://ivanderjp.vercel.app",
    image: "https://ivanderjp.vercel.app/image/ivander.jpg",
    sameAs: [
      "https://linkedin.com/in/ivanderjohanapratama",
      "https://github.com/vndr08"
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "President University",
      url: "https://president.ac.id"
    },
    knowsAbout: [
      "Artificial Intelligence",
      "AI Agents and Agentic Workflows",
      "Workflow Orchestration",
      "Retrieval Augmented Generation",
      "Python",
      "FastAPI",
      "ASP.NET and C#/.NET",
      "REST API Design and Integration",
      "React",
      "Next.js",
      "Telerik Kendo UI",
      "SQL and Data Modeling",
      "System Design",
      "Testing and Troubleshooting"
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://ivanderjp.vercel.app"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
