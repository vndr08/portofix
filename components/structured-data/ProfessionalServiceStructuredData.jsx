export default function ProfessionalServiceStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ivander Johana Pratama",
    description: "AI Engineer and Software Engineer building action-capable AI automation, enterprise applications, APIs, and full-stack systems.",
    url: "https://ivanderjp.vercel.app",
    image: "https://ivanderjp.vercel.app/image/ivander.jpg",
    email: "ivanderjohanapratama@gmail.com",
    telephone: "+62 821 7515 4739",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID"
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      opens: "09:00",
      closes: "18:00"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Engineering",
            description: "Action-capable AI agents, workflow orchestration, retrieval, NLP, ticket automation, and email automation"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Engineering",
            description: "ASP.NET/.NET C#, Python/FastAPI, React/Next.js, SQL systems, enterprise finance modules, testing, and troubleshooting"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Product Engineering",
            description: "Requirement analysis, system-flow design, REST API integration, full-stack development, and deployment"
          }
        }
      ]
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia"
    },
    sameAs: [
      "https://linkedin.com/in/ivanderjohanapratama",
      "https://github.com/vndr08"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
