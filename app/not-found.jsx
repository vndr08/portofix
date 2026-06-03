"use client";

import Button from "@/components/Button";

export default function NotFound() {
	return (
		<main className="theme-page flex min-h-screen items-center justify-center px-6">
			<section className="max-w-xl text-center">
				<p className="text-sm font-bold uppercase tracking-[0.24em] theme-accent">
					Page not found
				</p>
				<h1 className="mt-4 text-7xl font-bold theme-text">404</h1>
				<p className="mt-5 text-base leading-7 theme-muted">
					This route does not exist, but the portfolio is still right here.
				</p>
				<div className="mt-8 flex justify-center">
					<Button href="/" variation="primary">
						Back Home
					</Button>
				</div>
			</section>
		</main>
	);
}
