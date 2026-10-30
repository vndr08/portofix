import Link from "next/link";
import SpatialPageBackground from "@/components/SpatialPageBackground";
import SignalIcon from "@/components/SignalIcon";

export default function NotFound() {
	return (
		<main className="spatial-page signal-state">
			<SpatialPageBackground variant="signal" />
			<div className="signal-state-core" aria-hidden="true"><span>4</span><i /><span>4</span></div>
			<div className="signal-state-copy"><h1>SIGNAL<br />NOT FOUND.</h1><p>The route fell outside the system map. The work is still intact.</p><nav><Link href="/">Return home <SignalIcon direction="up-right" /></Link><Link href="/projects">Open project atlas <SignalIcon direction="up-right" /></Link></nav></div>
		</main>
	);
}
