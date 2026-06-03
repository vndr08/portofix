import Link from "next/link";

const FixedButton = ({ children, href = '/' }) => (
	<Link
		href={href}
		className="fixed left-4 top-20 z-40 flex h-11 w-11 items-center justify-center rounded-full backdrop-blur transition duration-300 ease-in-out hover:-translate-y-0.5 hover:text-emerald-600 md:left-10 theme-card-solid theme-text">
		{children}
	</Link>
);

export default FixedButton;
