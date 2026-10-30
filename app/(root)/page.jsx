import ImmersiveHero from "@/components/ImmersiveHero";
import ImmersiveSections from "@/components/ImmersiveSections";
import LazySpatialCorridor from "@/components/LazySpatialCorridor";

export default function MyPage() {
	return (
		<main className="immersive-home">
			<LazySpatialCorridor />
			<ImmersiveHero />
			<ImmersiveSections />
		</main>
	);
}
