import Link from "next/link";
import SpatialPageBackground from "@/components/SpatialPageBackground";

export default function NotFound() {
	return (
		<main className="spatial-page signal-state">
			<SpatialPageBackground variant="signal" />
			<div className="signal-state-core" aria-hidden="true"><span>4</span><i /><span>4</span></div>
			<div className="signal-state-copy"><h1>SIGNAL<br />NOT FOUND.</h1><p>The route fell outside the system map. The work is still intact.</p><nav><Link href="/">Return home ↗</Link><Link href="/projects">Open project atlas ↗</Link></nav></div>
		</main>
	);
}
