export default function ThemeScript() {
	const code = `
		(function () {
			try {
				var savedTheme = window.localStorage.getItem("ivan-theme-v2");
				var theme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : "light";
				if (!savedTheme) {
					window.localStorage.setItem("ivan-theme-v2", "light");
				}
				document.documentElement.setAttribute("data-theme", theme);
			} catch (error) {
				document.documentElement.setAttribute("data-theme", "light");
			}
		})();
	`;

	return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
