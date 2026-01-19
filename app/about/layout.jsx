import Footer from "@/components/Footer";

export const metadata = {
  title: "Ivander | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
