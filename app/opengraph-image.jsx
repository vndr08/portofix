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
					background: "linear-gradient(135deg, #f8fafc 0%, #ecfeff 50%, #f0fdf4 100%)",
					display: "flex",
					height: "100%",
					width: "100%",
					fontFamily: "system-ui, -apple-system, sans-serif",
				}}>
				{/* Background grid pattern */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						backgroundImage: "linear-gradient(rgba(16, 185, 129, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.08) 1px, transparent 1px)",
						backgroundSize: "40px 40px",
					}}
				/>

				{/* Main content container */}
				<div
					style={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						height: "100%",
						width: "100%",
						padding: "56px 72px",
					}}>
					{/* Header */}
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<div
							style={{
								background: "linear-gradient(135deg, #10b981, #06b6d4)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								fontSize: 28,
								fontWeight: 800,
								letterSpacing: 4,
								textTransform: "uppercase",
							}}>
							Portfolio
						</div>
						<div
							style={{
								display: "flex",
								gap: "12px",
							}}>
							<div
								style={{
									background: "#10b981",
									borderRadius: "12px",
									color: "white",
									fontSize: 18,
									fontWeight: 700,
									padding: "8px 20px",
								}}>
								Available
							</div>
						</div>
					</div>

					{/* Main content */}
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							flex: 1,
							justifyContent: "center",
							gap: "24px",
						}}>
						<div
							style={{
								fontSize: 68,
								fontWeight: 800,
								letterSpacing: 0,
								lineHeight: 1.1,
								color: "#0f172a",
							}}>
							{profile.name}
						</div>
						<div
							style={{
								color: "#10b981",
								fontSize: 32,
								fontWeight: 700,
								lineHeight: 1.3,
							}}>
							{profile.headline}
						</div>
						<div
							style={{
								color: "#64748b",
								fontSize: 24,
								fontWeight: 500,
								marginTop: "8px",
								maxWidth: "800px",
							}}>
							{profile.pitch}
						</div>
					</div>

					{/* Footer */}
					<div
						style={{
							display: "flex",
							gap: "32px",
							color: "#475569",
							fontSize: 22,
							fontWeight: 600,
						}}>
						<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span style={{ color: "#10b981" }}>◆</span> AI Automation
						</span>
						<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span style={{ color: "#06b6d4" }}>◆</span> Software Engineering
						</span>
						<span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
							<span style={{ color: "#8b5cf6" }}>◆</span> Full-Stack
						</span>
					</div>
				</div>

				{/* Decorative elements */}
				<div
					style={{
						position: "absolute",
						top: "60px",
						right: "80px",
						width: "120px",
						height: "120px",
						border: "4px solid #10b981",
						borderRadius: "50%",
						opacity: 0.15,
					}}
				/>
				<div
					style={{
						position: "absolute",
						bottom: "100px",
						left: "60px",
						width: "80px",
						height: "80px",
						background: "radial-gradient(circle, #06b6d4 2px, transparent 2px)",
						backgroundSize: "16px 16px",
						opacity: 0.2,
					}}
				/>
			</div>
		),
		size
	);
}
