export default function ProfessionalServiceStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ivander Johana Pratama",
    description: "AI Engineer, Software Engineer, and Full Stack Engineer specializing in AI automation, enterprise software development, and full-stack dashboards.",
    url: "https://ivanderjp.vercel.app",
    image: "https://ivanderjp.vercel.app/image/ivander.jpg",
    email: "ivanderjohanapratama@gmail.com",
    telephone: "+62 821 7515 4739",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cikarang",
      addressRegion: "Bekasi",
      addressCountry: "ID"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2397,
      longitude: 107.1581
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
            description: "AI agents, retrieval workflows, NLP, data automation, and model-driven tools"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Engineering",
            description: "Enterprise finance modules, bug fixing, UI migration, and reliable workflow delivery"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Engineering",
            description: "Dashboards, backend integrations, database-backed apps, and responsive interfaces"
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
