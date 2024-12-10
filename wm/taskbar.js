// bomberfish
// PhotonWM: A window manager for the web.

"use strict";

var taskbar;
function initTaskbar() {
	// Create the taskbar.
	console.info("[Photon] Taskbar init called");
	const taskbarTemp = document.createElement("div");
	taskbarTemp.classList.add("mat-thin");
	taskbarTemp.classList.add("bright");
	taskbarTemp.id = "photon-taskbar";
	desktop.appendChild(taskbarTemp);
	taskbar = document.getElementById("photon-taskbar");

	const buttons = document.createElement("div");
	buttons.classList.add("photon-taskbar-buttons");
	taskbar.appendChild(buttons);

	const startButton = document.createElement("span");
	startButton.id = "photon-start-orb";
	// startButton.classList.add("mat-ultrathin");
	startButton.classList.add("bright");
	buttons.appendChild(startButton);
	startButton.addEventListener("click", () => {
		document.getElementById("photon-start-menu").classList.toggle("hidden");
	});

	let startKey = "meta";

	if (navigator.platform.toLowerCase().includes("mac")) {
		startKey = "control";
	}

	document.addEventListener("keydown", (e) => {
		if (e.key.toLowerCase() === "escape") {
			e.preventDefault();
			document.getElementById("photon-start-menu").classList.add("hidden");
		} else if (e.key.toLowerCase() === startKey) {
			e.preventDefault();
			document.getElementById("photon-start-menu").classList.toggle("hidden");
		}
	});

	const time = document.createElement("span");
	time.id = "photon-time";
	time.classList.add("photon-taskbar-time");
	// time.classList.add("mat-ultrathin");
	time.classList.add("bright");
	time.innerText = new Date().toLocaleTimeString([], {hour12: false, day: "2-digit", month: "2-digit", year: "numeric"});
	time.addEventListener("click", () => {
		openApplication("calendar.app");
	})
	taskbar.appendChild(time);
	setInterval(() => {
		const currentTime = new Date()
		let timeStr = currentTime.toLocaleTimeString([], {hour12: false, day: "2-digit", month: "2-digit", year: "numeric"});
		if (currentTime.getSeconds() % 2 === 0) {
			timeStr = timeStr.replace(":", " ").replace(":", " ");
		}
		time.innerText = timeStr;
	}, 1000);
}
