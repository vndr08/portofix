import { ImageResponse } from "next/og";
import profile from "@/json/profile.json";

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					background: "#f8fafc",
					color: "#0f172a",
					display: "flex",
					height: "100%",
					padding: "72px",
					width: "100%",
				}}>
				<div
					style={{
						background: "#ffffff",
						border: "1px solid #dbeafe",
						borderRadius: "24px",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						padding: "56px",
						width: "100%",
					}}>
					<div
							style={{
							color: "#059669",
							fontSize: 30,
							fontWeight: 700,
							letterSpacing: 4,
							textTransform: "uppercase",
						}}>
						Portfolio
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
						}}>
						<div
							style={{
								fontSize: 72,
								fontWeight: 800,
								letterSpacing: 0,
								lineHeight: 1.05,
								maxWidth: 860,
							}}>
							{profile.name}
						</div>
						<div
							style={{
								color: "#059669",
								fontSize: 36,
								fontWeight: 700,
								marginTop: 24,
							}}>
							{profile.headline}
						</div>
					</div>
					<div
						style={{
							color: "#475569",
							display: "flex",
							fontSize: 28,
							fontWeight: 600,
							gap: 28,
						}}>
						<span>AI Automation</span>
						<span>Full-stack Systems</span>
						<span>Data Workflows</span>
					</div>
				</div>
			</div>
		),
		size
	);
}
