export default function PersonStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ivander Johana Pratama",
    jobTitle: "AI Engineer, Software Engineer, and Full Stack Engineer",
    email: "ivanderjohanapratama@gmail.com",
    telephone: "+62 821 7515 4739",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cikarang",
      addressRegion: "Bekasi",
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
      "Machine Learning",
      "Python",
      "LangChain",
      "FastAPI",
      "React",
      "Next.js",
      "Full Stack Development",
      "Data Science"
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
