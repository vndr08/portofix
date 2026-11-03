"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmailButton({ email, className = "" }) {
	const [status, setStatus] = useState("idle");
	const timerRef = useRef(null);

	useEffect(() => () => window.clearTimeout(timerRef.current), []);

	const copyEmail = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setStatus("copied");
		} catch {
			setStatus("failed");
		}
		window.clearTimeout(timerRef.current);
		timerRef.current = window.setTimeout(() => setStatus("idle"), 2400);
	};

	const label = status === "copied" ? "Email copied" : status === "failed" ? email : "Copy email";

	return <button type="button" className={className} onClick={copyEmail} title={`Copy ${email}`}><span aria-live="polite">{label}</span></button>;
}
