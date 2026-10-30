"use client";

import { useEffect } from "react";

export function usePWA() {
	useEffect(() => {
		if (!("serviceWorker" in navigator)) return;
		let cancelled = false;

		if (process.env.NODE_ENV !== "production") {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				registrations.forEach((registration) => registration.unregister());
			});
			return;
		}

		const register = async () => {
			try {
				if (!cancelled) await navigator.serviceWorker.register("/sw.js");
			} catch {
				// The portfolio remains fully usable online when service workers are blocked.
			}
		};
		if (document.readyState === "complete") register();
		else window.addEventListener("load", register, { once: true });
		return () => {
			cancelled = true;
			window.removeEventListener("load", register);
		};
	}, []);
}

export function PWAProvider({ children }) {
	usePWA();
	return <>{children}</>;
}
