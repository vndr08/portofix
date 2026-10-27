"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const PROJECTS = [
	{ selector: ".project-scene:nth-of-type(1)", z: -23, x: 2.4, image: "/image/lightfield/vanguard-ui.webp", color: 0xa8ffea, aspect: 1800 / 1034 },
	{ selector: ".project-scene:nth-of-type(2)", z: -42, x: -2.2, image: "/image/lightfield/whatsapp-ui.webp", color: 0xc8a7ff, aspect: 1800 / 1019 },
	{ selector: ".project-scene:nth-of-type(3)", z: -61, x: 2.2, image: "/image/lightfield/kalbe-ui.webp", color: 0xff914d, aspect: 1691 / 1100 },
];

function interpolateAnchors(scrollY, anchors, values) {
	if (scrollY <= anchors[0]) return values[0];
	for (let index = 1; index < anchors.length; index += 1) {
		if (scrollY <= anchors[index]) {
			const range = anchors[index] - anchors[index - 1] || 1;
			const progress = (scrollY - anchors[index - 1]) / range;
			const eased = progress * progress * (3 - 2 * progress);
			return THREE.MathUtils.lerp(values[index - 1], values[index], eased);
		}
	}
	return values[values.length - 1];
}

export default function SpatialCorridor() {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.innerWidth < 821) return;

		let renderer;
		try {
			renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
		} catch {
			return;
		}

		document.documentElement.classList.add("webgl-corridor-ready");
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.05));
		renderer.setSize(window.innerWidth, window.innerHeight, false);
		renderer.outputColorSpace = THREE.SRGBColorSpace;

		const scene = new THREE.Scene();
		scene.fog = new THREE.FogExp2(0x05070b, 0.036);
		const camera = new THREE.PerspectiveCamera(46, window.innerWidth / window.innerHeight, 0.1, 140);
		camera.position.set(0, 0, 11);

		const world = new THREE.Group();
		scene.add(world);

		const frameGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(13.8, 8.2, 0.08));
		for (let index = 0; index < 16; index += 1) {
			const material = new THREE.LineBasicMaterial({ color: index % 3 === 1 ? 0x725b94 : 0x406f69, transparent: true, opacity: Math.max(0.08, 0.34 - index * 0.011) });
			const frame = new THREE.LineSegments(frameGeometry, material);
			frame.position.z = 3 - index * 4.2;
			frame.rotation.z = index % 2 ? -0.018 : 0.018;
			frame.scale.setScalar(1 + (index % 4) * 0.025);
			world.add(frame);
		}

		const packetGeometry = new THREE.BoxGeometry(0.14, 0.42, 0.08);
		const packetMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.76, vertexColors: true });
		const packetCount = 120;
		const packets = new THREE.InstancedMesh(packetGeometry, packetMaterial, packetCount);
		const packetDummy = new THREE.Object3D();
		const packetColor = new THREE.Color();
		for (let index = 0; index < packetCount; index += 1) {
			const phase = index * 0.43;
			const radius = 2.15 + Math.sin(index * 0.71) * 0.58;
			packetDummy.position.set(Math.cos(phase) * radius, Math.sin(phase) * radius * 0.62, -index * 0.052 + 1.8);
			packetDummy.rotation.set(phase * 0.13, phase, phase * 0.08);
			packetDummy.scale.setScalar(0.7 + (index % 7) * 0.07);
			packetDummy.updateMatrix();
			packets.setMatrixAt(index, packetDummy.matrix);
			packetColor.setHex(index % 17 === 0 ? 0xff914d : index % 11 === 0 ? 0xc8a7ff : 0xa8ffea);
			packets.setColorAt(index, packetColor);
		}
		packets.instanceMatrix.needsUpdate = true;
		packets.instanceColor.needsUpdate = true;
		world.add(packets);

		const coreGeometry = new THREE.IcosahedronGeometry(1.36, 2);
		const coreMaterial = new THREE.MeshBasicMaterial({ color: 0xcdfdf2, wireframe: true, transparent: true, opacity: 0.38 });
		const core = new THREE.Mesh(coreGeometry, coreMaterial);
		core.position.z = -0.8;
		world.add(core);

		const particleCount = 220;
		const particlePositions = new Float32Array(particleCount * 3);
		for (let index = 0; index < particleCount; index += 1) {
			particlePositions[index * 3] = (Math.random() - 0.5) * 26;
			particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 14;
			particlePositions[index * 3 + 2] = 8 - Math.random() * 82;
		}
		const particleGeometry = new THREE.BufferGeometry();
		particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
		const particles = new THREE.Points(particleGeometry, new THREE.PointsMaterial({ color: 0xa8ffea, size: 0.026, transparent: true, opacity: 0.52, sizeAttenuation: true }));
		world.add(particles);

		const speedLineGeometry = new THREE.BufferGeometry();
		const speedLinePositions = [];
		for (let index = 0; index < 34; index += 1) {
			const angle = index * 2.399;
			const radius = 3.2 + (index % 7) * 0.64;
			const startZ = 7 - (index % 11) * 7.2;
			speedLinePositions.push(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6, startZ);
			speedLinePositions.push(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.6, startZ - 2.8 - (index % 4));
		}
		speedLineGeometry.setAttribute("position", new THREE.Float32BufferAttribute(speedLinePositions, 3));
		const speedLineMaterial = new THREE.LineBasicMaterial({ color: 0xa8ffea, transparent: true, opacity: 0.08 });
		const speedLines = new THREE.LineSegments(speedLineGeometry, speedLineMaterial);
		world.add(speedLines);

		const textureLoader = new THREE.TextureLoader();
		const projectGroups = [];
		PROJECTS.forEach((project, index) => {
			const group = new THREE.Group();
			group.position.set(project.x, 0, project.z);
			group.rotation.y = project.x > 0 ? -0.08 : 0.08;
			const height = 4.65;
			const width = height * project.aspect;
			const texture = textureLoader.load(project.image);
			texture.colorSpace = THREE.SRGBColorSpace;
			texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
			const imageMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.98, toneMapped: false });
			imageMaterial.userData.baseOpacity = 0.98;
			const image = new THREE.Mesh(new THREE.PlaneGeometry(width, height), imageMaterial);
			group.add(image);
			for (let layer = 1; layer <= 3; layer += 1) {
				const echoMaterial = new THREE.MeshBasicMaterial({ map: layer < 3 ? texture : null, color: project.color, wireframe: layer === 3, transparent: true, opacity: layer === 1 ? 0.16 : layer === 2 ? 0.08 : 0.055, depthWrite: false, toneMapped: false });
				echoMaterial.userData.baseOpacity = echoMaterial.opacity;
				const echo = new THREE.Mesh(new THREE.PlaneGeometry(width, height), echoMaterial);
				echo.position.set((project.x > 0 ? -1 : 1) * layer * 0.22, layer * 0.13, -layer * 0.32);
				group.add(echo);
			}
			const edgeMaterial = new THREE.LineBasicMaterial({ color: project.color, transparent: true, opacity: 0.64 });
			edgeMaterial.userData.baseOpacity = 0.64;
			const edge = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(width + 0.16, height + 0.16)), edgeMaterial);
			edge.position.z = 0.03;
			group.add(edge);
			world.add(group);
			projectGroups.push(group);
		});

		let anchors = [0, 2600, 4300, 6000];
		let workEnd = document.body.scrollHeight;
		const updateAnchors = () => {
			const resolved = PROJECTS.map((project) => document.querySelector(project.selector)).filter(Boolean);
			if (resolved.length === 3) anchors = [0, ...resolved.map((element) => {
				const bounds = element.getBoundingClientRect();
				return bounds.top + window.scrollY + bounds.height * 0.5 - window.innerHeight * 0.5;
			})];
			const work = document.querySelector(".work-section");
			workEnd = work ? work.offsetTop + work.offsetHeight : document.body.scrollHeight;
		};
		updateAnchors();

		let mouseX = 0;
		let mouseY = 0;
		let cameraZ = 11;
		let cameraX = 0;
		let cameraY = 0;
		let frameId;
		let lastTime = performance.now();
		let lastScroll = window.scrollY;
		let scrollVelocity = 0;

		const onPointerMove = (event) => {
			mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
			mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
		};
		const onContextLost = (event) => {
			event.preventDefault();
			document.documentElement.classList.remove("webgl-corridor-ready");
		};
		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.05));
			renderer.setSize(window.innerWidth, window.innerHeight, false);
			updateAnchors();
		};

		const animate = (time) => {
			const delta = Math.min((time - lastTime) / 1000, 0.05);
			lastTime = time;
			const currentScroll = window.scrollY;
			const corridorVisible = currentScroll <= workEnd - window.innerHeight * 0.1;
			canvas.style.opacity = corridorVisible ? "1" : "0";
			if (!corridorVisible || document.hidden) {
				frameId = requestAnimationFrame(animate);
				return;
			}
			const rawVelocity = delta > 0 ? (currentScroll - lastScroll) / delta : 0;
			lastScroll = currentScroll;
			scrollVelocity = THREE.MathUtils.lerp(scrollVelocity, THREE.MathUtils.clamp(rawVelocity / 1800, -1, 1), 1 - Math.exp(-delta * 7));
			const targetZ = interpolateAnchors(currentScroll, anchors, [11, -16.5, -35.5, -54.5]);
			const targetX = interpolateAnchors(currentScroll, anchors, [0, -0.9, 0.9, -0.8]) + mouseX * 0.48;
			const targetY = mouseY * -0.34;
			const damping = 1 - Math.exp(-delta * 6.2);
			cameraZ = THREE.MathUtils.lerp(cameraZ, targetZ, damping);
			cameraX = THREE.MathUtils.lerp(cameraX, targetX, damping);
			cameraY = THREE.MathUtils.lerp(cameraY, targetY, damping);
			camera.position.set(cameraX, cameraY, cameraZ);
			camera.lookAt(cameraX * 0.28, cameraY * 0.2, cameraZ - 11);
			camera.rotation.z = mouseX * -0.012 + scrollVelocity * -0.025;

			core.rotation.x = time * 0.00013 + mouseY * 0.12;
			core.rotation.y = time * 0.00018 + mouseX * 0.16;
			packets.rotation.z = time * 0.000055;
			particles.rotation.z = -time * 0.000012;
			speedLines.rotation.z = time * 0.000018;
			speedLineMaterial.opacity = 0.055 + Math.abs(scrollVelocity) * 0.22;
			world.position.z = scrollVelocity * 0.38;
			projectGroups.forEach((group, index) => {
				const sceneDistance = Math.abs(currentScroll - anchors[index + 1]);
				const reveal = THREE.MathUtils.clamp(1 - (sceneDistance - window.innerHeight * 0.28) / (window.innerHeight * 0.72), 0, 1);
				group.visible = reveal > 0.01 && Math.abs(cameraZ - group.position.z) < 25;
				group.traverse((child) => {
					if (child.material?.userData?.baseOpacity != null) child.material.opacity = child.material.userData.baseOpacity * reveal;
				});
				group.rotation.z = Math.sin(time * 0.00032 + index) * 0.012;
				group.position.y = Math.sin(time * 0.00042 + index * 1.7) * 0.09 + scrollVelocity * (index % 2 ? -0.18 : 0.18);
			});

			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};

		window.addEventListener("pointermove", onPointerMove, { passive: true });
		window.addEventListener("resize", onResize);
		canvas.addEventListener("webglcontextlost", onContextLost);
		frameId = requestAnimationFrame(animate);

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("pointermove", onPointerMove);
			window.removeEventListener("resize", onResize);
			canvas.removeEventListener("webglcontextlost", onContextLost);
			document.documentElement.classList.remove("webgl-corridor-ready");
			frameGeometry.dispose();
			packetGeometry.dispose();
			packetMaterial.dispose();
			coreGeometry.dispose();
			coreMaterial.dispose();
			particleGeometry.dispose();
			particles.material.dispose();
			speedLineGeometry.dispose();
			speedLineMaterial.dispose();
			projectGroups.forEach((group) => group.traverse((child) => {
				if (child.geometry) child.geometry.dispose();
				if (child.material) {
					if (child.material.map) child.material.map.dispose();
					child.material.dispose();
				}
			}));
			renderer.dispose();
		};
	}, []);

	return <canvas ref={canvasRef} className="corridor-canvas" aria-hidden="true" />;
}
