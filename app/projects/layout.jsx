// generate layour with footer
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projects | Ivander Johana Pratama",
  description:
    "AI, data automation, dashboard, and full-stack projects by Ivander Johana Pratama.",
  alternates: {
    canonical: "/projects",
  },
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
