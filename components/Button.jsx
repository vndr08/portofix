import Link from "next/link";

const getClasses = (variation, className = "") =>
	`title inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
		variation === "primary"
			? "border-2 border-emerald-500 bg-emerald-500 text-white hover:border-emerald-600 hover:bg-emerald-600 theme-button-shadow hover:-translate-y-0.5"
			: "border-2 theme-border theme-card-solid theme-text hover:border-emerald-400 hover:text-emerald-600 hover:-translate-y-0.5"
	} ${className}`;

const Button = ({
	children,
	variation,
	href,
	className,
	target,
	rel,
	...props
}) => {
	const classes = getClasses(variation, className);

	if (href) {
		const isExternal =
			href.startsWith("http") ||
			href.startsWith("mailto:") ||
			href.startsWith("tel:");

		if (isExternal) {
			return (
				<a
					href={href}
					target={target}
					rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
					className={classes}
					{...props}>
					{children}
				</a>
			);
		}

		return (
			<Link href={href} className={classes} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} {...props}>
			{children}
		</button>
	);
};

export default Button;
