import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faWifi } from "@fortawesome/free-solid-svg-icons";

export const metadata = {
	title: "Offline | Ivan Portfolio",
};

export default function OfflinePage() {
	return (
		<main className="theme-page flex min-h-screen items-center px-4 py-24 sm:px-6">
			<div className="mx-auto max-w-xl text-center">
				<FontAwesomeIcon
					icon={faWifi}
					className="mx-auto h-10 w-10 theme-accent"
					aria-hidden="true"
				/>
				<h1 className="mt-6 text-4xl font-bold tracking-tight theme-text sm:text-5xl">
					You&apos;re offline.
				</h1>
				<p className="mx-auto mt-5 max-w-lg leading-7 theme-muted">
					Reconnect to the internet, then try loading the portfolio again.
				</p>
				<Link
					href="/"
					className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2">
					Try again
					<FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" aria-hidden="true" />
				</Link>
			</div>
		</main>
	);
}
