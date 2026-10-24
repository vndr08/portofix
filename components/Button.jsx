import Link from "next/link";

const getClasses = (variation, className = "") =>
	`title inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-center text-sm font-bold transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:w-auto sm:px-6 ${
		variation === "primary"
			? "border-2 border-emerald-700 bg-emerald-700 text-white hover:border-emerald-800 hover:bg-emerald-800 hover:-translate-y-0.5 active:translate-y-0"
			: "border-2 theme-border theme-card-solid theme-text hover:border-emerald-400 hover:text-emerald-600 hover:-translate-y-0.5 active:translate-y-0"
	} ${className}`;

const Button = ({
	children,
	variation,
	href,
	className,
	target,
	rel,
	disabled,
	ariaLabel,
	...props
}) => {
	const classes = getClasses(variation, className);

	if (disabled) {
		return (
			<span className={classes} aria-disabled="true">
				{children}
			</span>
		);
	}

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
					aria-label={ariaLabel}
					{...props}>
					{children}
				</a>
			);
		}

		return (
			<Link href={href} target={target} rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)} className={classes} aria-label={ariaLabel} {...props}>
				{children}
			</Link>
		);
	}

	return (
		<button className={classes} aria-label={ariaLabel} {...props}>
			{children}
		</button>
	);
};

export default Button;
