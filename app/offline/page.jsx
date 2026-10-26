import Link from "next/link";
import SpatialPageBackground from "@/components/SpatialPageBackground";

export const metadata = { title: "Offline | Ivan Portfolio" };

export default function OfflinePage() {
	return (
		<main className="spatial-page signal-state">
			<SpatialPageBackground variant="signal" />
			<div className="signal-state-core offline-core" aria-hidden="true"><span>×</span><i /><span>×</span></div>
			<div className="signal-state-copy"><h1>TRANSMISSION<br />PAUSED.</h1><p>Your connection is offline. Reconnect, then re-enter the portfolio world.</p><nav><Link href="/">Try again ↗</Link></nav></div>
		</main>
	);
}
