"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PALETTES = {
	projects: [0xa8ffea, 0xc8a7ff, 0xff914d],
	about: [0xc8a7ff, 0xa8ffea, 0xf1ede9],
	case: [0xff914d, 0xa8ffea, 0xc8a7ff],
	signal: [0xa8ffea, 0xff914d, 0xf1ede9],
};

export default function SpatialPageBackground({ variant = "projects" }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

		let renderer;
		try {
			renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
		} catch {
			return undefined;
		}

		const palette = PALETTES[variant] || PALETTES.projects;
		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x05070b, 0.048);
		const camera = new THREE.PerspectiveCamera(52, window.innerWidth / window.innerHeight, 0.1, 100);
		camera.position.set(0, 0, 9);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
		renderer.setSize(window.innerWidth, window.innerHeight, false);
		renderer.outputColorSpace = THREE.SRGBColorSpace;

		const root = new THREE.Group();
		scene.add(root);

		const frameGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(10.8, 7.2, 0.08));
		const frames = [];
		for (let index = 0; index < 14; index += 1) {
			const material = new THREE.LineBasicMaterial({ color: palette[index % palette.length], transparent: true, opacity: 0.09 + (index % 3) * 0.025 });
			const frame = new THREE.LineSegments(frameGeometry, material);
			frame.position.set(Math.sin(index * 0.9) * 1.4, Math.cos(index * 0.7) * 0.6, -index * 4.1);
			frame.rotation.set(index * 0.01, index % 2 ? 0.05 : -0.05, index % 2 ? -0.025 : 0.025);
			root.add(frame);
			frames.push(frame);
		}

		const nodeCount = 150;
		const nodeGeometry = new THREE.BoxGeometry(0.06, 0.22, 0.05);
		const nodeMaterial = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.7 });
		const nodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeCount);
		const dummy = new THREE.Object3D();
		const color = new THREE.Color();
		for (let index = 0; index < nodeCount; index += 1) {
			const radius = 2.2 + (index % 11) * 0.14;
			const phase = index * 0.57;
			dummy.position.set(Math.cos(phase) * radius, Math.sin(phase * 1.13) * radius * 0.58, 3 - (index % 44) * 1.25);
			dummy.rotation.set(phase * 0.08, phase, phase * 0.04);
			dummy.updateMatrix();
			nodes.setMatrixAt(index, dummy.matrix);
			color.setHex(palette[index % palette.length]);
			nodes.setColorAt(index, color);
		}
		nodes.instanceMatrix.needsUpdate = true;
		nodes.instanceColor.needsUpdate = true;
		root.add(nodes);

		const knotGeometry = new THREE.TorusKnotGeometry(1.25, 0.08, 120, 12, 2, 5);
		const knotMaterial = new THREE.MeshBasicMaterial({ color: palette[0], wireframe: true, transparent: true, opacity: 0.24 });
		const knot = new THREE.Mesh(knotGeometry, knotMaterial);
		knot.position.set(2.4, -0.2, -5);
		root.add(knot);

		const particleCount = 420;
		const positions = new Float32Array(particleCount * 3);
		for (let index = 0; index < particleCount; index += 1) {
			positions[index * 3] = (Math.random() - 0.5) * 24;
			positions[index * 3 + 1] = (Math.random() - 0.5) * 13;
			positions[index * 3 + 2] = 5 - Math.random() * 65;
		}
		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		const particleMaterial = new THREE.PointsMaterial({ color: palette[1], size: 0.022, transparent: true, opacity: 0.52, sizeAttenuation: true });
		const particles = new THREE.Points(particleGeometry, particleMaterial);
		root.add(particles);

		let pointerX = 0;
		let pointerY = 0;
		let smoothX = 0;
		let smoothY = 0;
		let frameId;
		let last = performance.now();

		const handlePointer = (event) => {
			pointerX = event.clientX / window.innerWidth - 0.5;
			pointerY = event.clientY / window.innerHeight - 0.5;
		};
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
			renderer.setSize(window.innerWidth, window.innerHeight, false);
		};
		const animate = (time) => {
			const delta = Math.min((time - last) / 1000, 0.05);
			last = time;
			const damping = 1 - Math.exp(-delta * 4.5);
			smoothX = THREE.MathUtils.lerp(smoothX, pointerX, damping);
			smoothY = THREE.MathUtils.lerp(smoothY, pointerY, damping);
			const travel = Math.min(window.scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1), 1);
			camera.position.x = smoothX * 1.2;
			camera.position.y = -smoothY * 0.75;
			camera.position.z = 9 - travel * 17;
			camera.rotation.z = smoothX * -0.018 + Math.sin(time * 0.00012) * 0.006;
			camera.lookAt(smoothX * 0.25, -smoothY * 0.12, camera.position.z - 12);
			knot.rotation.x += delta * 0.1;
			knot.rotation.y += delta * 0.16;
			nodes.rotation.z = time * 0.000025;
			particles.rotation.z = -time * 0.00001;
			frames.forEach((frame, index) => {
				frame.position.x += Math.sin(time * 0.00016 + index) * 0.00035;
			});
			if (!document.hidden) renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};

		window.addEventListener("pointermove", handlePointer, { passive: true });
		window.addEventListener("resize", handleResize);
		frameId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("pointermove", handlePointer);
			window.removeEventListener("resize", handleResize);
			frameGeometry.dispose();
			frames.forEach((frame) => frame.material.dispose());
			nodeGeometry.dispose();
			nodeMaterial.dispose();
			knotGeometry.dispose();
			knotMaterial.dispose();
			particleGeometry.dispose();
			particleMaterial.dispose();
			renderer.dispose();
		};
	}, [variant]);

	return <canvas ref={canvasRef} className="spatial-page-canvas" aria-hidden="true" />;
}
