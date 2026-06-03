import Footer from "@/components/Footer";

export const metadata = {
  title: "About | Ivander Johana Pratama",
  description:
    "Profile, skills, experience, and recruiter highlights for Ivander Johana Pratama.",
  alternates: {
    canonical: "/about",
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
