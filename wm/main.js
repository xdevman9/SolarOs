// bomberfish
// PhotonWM: A window manager for the web.
"use strict";

console.debug("[Photon] Main");

if (window.mobileCheck() === false) {
	console.debug("[Photon] Desktop init");
	initDesktop();
	console.debug("[Photon] Taskbar init");
	initTaskbar();
	console.debug("[Photon] Start menu init");
	initStartMenu();
	setTimeout(() => {
		console.info("[Photon] Everything is ready. Hiding loader.");
		mainApp.classList.remove("min");
		document.getElementById("loader").classList.add("hidden");
		if (localStorage.getItem("setup-complete") === null) {
			openApplication("welcome.app");
		}
	}, 1500 + (Math.random() * 750));
} else {
	const viewportMeta = document.createElement("meta");
	viewportMeta.name = "viewport";
	viewportMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";
	document.head.appendChild(viewportMeta);

	["#loader-stick", "#loader-ball"].forEach((el) => {
		document.querySelector(el).remove();
	})

	document.querySelector("#loader-status").innerText = "Mobile devices are not supported. Sorry!";
}