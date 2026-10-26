"use client";

import { useEffect } from "react";

export function usePWA() {
	useEffect(() => {
		if (!("serviceWorker" in navigator)) return;

		if (process.env.NODE_ENV !== "production") {
			navigator.serviceWorker.getRegistrations().then((registrations) => {
				registrations.forEach((registration) => registration.unregister());
			});
			return;
		}

		const register = () => navigator.serviceWorker.register("/sw.js");
		window.addEventListener("load", register);
		return () => window.removeEventListener("load", register);
	}, []);
}

export function PWAProvider({ children }) {
	usePWA();
	return <>{children}</>;
}
