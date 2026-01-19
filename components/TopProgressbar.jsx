"use client"
import NProgress from "nprogress";

// Initialize only when mounted
if (typeof window !== 'undefined') {
	// Start progress on page visibility change (tab focus)
	document.addEventListener('visibilitychange', () => {
		if (document.hidden) {
			NProgress.done();
		}
	});
}

export default function TopProgressbar() {
	return null;
}
