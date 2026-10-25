export default function SignalIcon({ direction = "right", className = "" }) {
	return (
		<svg
			className={`signal-icon signal-icon-${direction} ${className}`.trim()}
			viewBox="0 0 16 16"
			aria-hidden="true"
			focusable="false">
			<path d="M2.5 8h10M8.75 4.25 12.5 8l-3.75 3.75" />
		</svg>
	);
}
