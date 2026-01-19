// components/Chat.js
"use client"
import { useEffect } from "react";

// Component for Intelliticks chat widget
const Chat = () => {
	useEffect(() => {
		// Intelliticks chat widget initialization script
		(function (I, L, T, i, c, k, s) {
			if (I.iticks) return;
			I.iticks = { host: c, settings: s, clientId: k, cdn: L, queue: [] };
			var h = T.head || T.documentElement;
			var e = T.createElement(i);
			var l = I.location;
			e.async = true;
			e.src = (L || c) + "/client/inject-v2.min.js";
			h.insertBefore(e, h.firstChild);
			I.iticks.call = function (a, b) {
				I.iticks.queue.push([a, b]);
			};
		})(
			window,
			"https://cdn-v1.intelliticks.com/prod/common",
			document,
			"script",
			"https://app.intelliticks.com",
			"ivander_johana_pratama_client_id",
			{}
		);
	}, []);

	// Render invisible container - the Intelliticks widget will be injected here
	return <div id="intelliticks-widget-container" style={{ display: "contents" }} />;
};

export default Chat;
