import ImmersiveHero from "@/components/ImmersiveHero";
import ImmersiveSections from "@/components/ImmersiveSections";
import SpatialCorridor from "@/components/SpatialCorridor";

export default function MyPage() {
	return (
		<div className="immersive-home">
			<SpatialCorridor />
			<ImmersiveHero />
			<ImmersiveSections />
		</div>
	);
}
