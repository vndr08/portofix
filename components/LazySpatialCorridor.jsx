"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const SpatialCorridor = dynamic(() => import("@/components/SpatialCorridor"), {
	ssr: false,
	loading: () => <canvas className="corridor-canvas" aria-hidden="true" />,
});

export default function LazySpatialCorridor() {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 821) return undefined;
		const activate = () => setReady(true);
		if ("requestIdleCallback" in window) {
			const idleId = window.requestIdleCallback(activate, { timeout: 900 });
			return () => window.cancelIdleCallback(idleId);
		}
		const timerId = window.setTimeout(activate, 320);
		return () => window.clearTimeout(timerId);
	}, []);

	return ready ? <SpatialCorridor /> : <canvas className="corridor-canvas" aria-hidden="true" />;
}
