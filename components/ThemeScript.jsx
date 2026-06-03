export default function ThemeScript() {
	const code = `
		(function () {
			try {
				var savedTheme = window.localStorage.getItem("ivan-theme");
				var theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
				document.documentElement.setAttribute("data-theme", theme);
			} catch (error) {
				document.documentElement.setAttribute("data-theme", "light");
			}
		})();
	`;

	return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
