// useIntersectionObserver.js
import { useEffect, useState, useRef, useCallback } from "react";

export function useIntersectionObserver() {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);
	const observerRef = useRef(null);

	useEffect(() => {
		// Only run on client side
		if (typeof window === "undefined") return;

		const observerCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setIsIntersecting(true);
				}
			});
		};

		observerRef.current = new IntersectionObserver(observerCallback, {
			root: null,
			rootMargin: "0px",
			threshold: 0.1,
		});

		const currentRef = ref.current;
		if (currentRef && observerRef.current) {
			observerRef.current.observe(currentRef);
		}

		return () => {
			if (currentRef && observerRef.current) {
				observerRef.current.unobserve(currentRef);
				observerRef.current.disconnect();
			}
		};
	}, []);

	return [ref, isIntersecting];
}
