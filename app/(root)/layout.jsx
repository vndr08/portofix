import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
