"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import profile from "@/json/profile.json";
import SignalIcon from "@/components/SignalIcon";
import useSafeReducedMotion from "@/components/useSafeReducedMotion";

const links = [
	{ href: "/", label: "Home", match: (path) => path === "/" },
	{ href: "/projects", label: "Projects", match: (path) => path.startsWith("/projects") },
	{ href: "/about", label: "About", match: (path) => path === "/about" },
	{ href: "/#contact", label: "Contact", match: () => false },
];

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const reduceMotion = useSafeReducedMotion();
	const toggleRef = useRef(null);
	const panelRef = useRef(null);

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return undefined;
		const panel = panelRef.current;
		const getFocusable = () => panel ? [...panel.querySelectorAll('a[href],button:not([disabled])')] : [];
		const focusFrame = window.requestAnimationFrame(() => getFocusable()[0]?.focus());
		const onKeyDown = (event) => {
			if (event.key === "Escape") {
				setOpen(false);
				window.requestAnimationFrame(() => toggleRef.current?.focus());
				return;
			}
			if (event.key !== "Tab") return;
			const focusable = getFocusable();
			if (!focusable.length) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
			else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
		};
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.cancelAnimationFrame(focusFrame);
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
				<a className="system-nav-resume" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Résumé <SignalIcon direction="up-right" /></a>
				<button ref={toggleRef} className="system-nav-toggle" type="button" aria-expanded={open} aria-controls="system-mobile-nav" onClick={() => setOpen((value) => !value)}>
					<span>{open ? "Close" : "Menu"}</span><i aria-hidden="true" />
				</button>
			</nav>

			<AnimatePresence>
				{open && (
					<motion.div ref={panelRef} id="system-mobile-nav" className="system-mobile-nav" role="dialog" aria-modal="true" aria-label="Site navigation" initial={reduceMotion ? false : { clipPath: "inset(0 0 100% 0)", opacity: 0.96 }} animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }} exit={reduceMotion ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)", opacity: 0.96 }} transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.16, 1, 0.3, 1] }}>
						<div className="mobile-nav-orbit" aria-hidden="true"><i /><i /><i /></div>
						{links.map((link, index) => (
							<motion.div key={link.href} initial={reduceMotion ? false : { opacity: 0, y: 18, filter: "blur(3px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: reduceMotion ? 0.01 : 0.24, delay: reduceMotion ? 0 : 0.035 + index * 0.03, ease: [0.16, 1, 0.3, 1] }}>
								<Link href={link.href} aria-current={link.match(pathname) ? "page" : undefined} onClick={() => setOpen(false)}><span>0{index + 1}</span>{link.label}</Link>
							</motion.div>
						))}
						<a className="mobile-resume" href={profile.cvUrl} target="_blank" rel="noopener noreferrer">Open résumé <SignalIcon direction="up-right" /></a>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
