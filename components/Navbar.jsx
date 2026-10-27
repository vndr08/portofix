"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import profile from "@/json/profile.json";

const links = [
	{ href: "/", label: "Home", match: (path) => path === "/" },
	{ href: "/projects", label: "Projects", match: (path) => path.startsWith("/projects") },
	{ href: "/about", label: "About", match: (path) => path === "/about" },
	{ href: "/#contact", label: "Contact", match: () => false },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (!open) return undefined;
		const onKeyDown = (event) => event.key === "Escape" && setOpen(false);
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [open]);

	return (
		<>
			<nav className="system-nav" aria-label="Primary navigation">
				<Link href="/" className="system-nav-mark" aria-label="Ivan portfolio home">IVAN<span>®</span></Link>
				<div className="system-nav-links">
					{links.map((link) => {
						const current = link.match(pathname);
						return <Link key={link.href} href={link.href} aria-current={current ? "page" : undefined}>
							<motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}>{link.label}</motion.span><i aria-hidden="true" />
						</Link>
					})}
				</div>
				<a className="system-nav-resume" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Résumé ↗</a>
				<button className="system-nav-toggle" type="button" aria-expanded={open} aria-controls="system-mobile-nav" onClick={() => setOpen((value) => !value)}>
					<span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
				</button>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div id="system-mobile-nav" className="system-mobile-nav" initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.96 }} animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }} exit={{ clipPath: "inset(0 0 100% 0)", opacity: 0.96 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>
						<div className="mobile-nav-orbit" aria-hidden="true"><i /><i /><i /></div>
						{links.map((link, index) => (
							<motion.div key={link.href} initial={{ opacity: 0, y: 18, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: 0.24, delay: 0.035 + index * 0.03, ease: [0.16, 1, 0.3, 1] }}>
								<Link href={link.href} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>
							</motion.div>
						))}
						<a className="mobile-resume" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé ↗</a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
