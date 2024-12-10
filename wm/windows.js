"use strict";

var isMousingOverAWindowButton = false;

/**
 * Creates a new window element with the specified contents, title, id, and icon.
 *
 * @param {string | HTMLElement} contents - The contents to be displayed inside the window. Can be a string of HTML or an HTMLElement.
 * @param {string} [title] - The title of the window. If not provided, it will be derived from the contents or set to "Untitled Window".
 * @param {string} id - The unique identifier for the window.
 * @param {string} [icon] - The URL of the icon to be displayed in the taskbar for this window.
 * @param {string} [width] - The width of the window, in CSS units.
 * @param {string} [height] - The height of the window, in CSS units.
 * @param {boolean} [resizable] - Whether the window should be resizable.
 */
function createWindow(contents, title, id, icon, width, height, resizable) {
	console.info(`[Photon] Creating window: ${title}`);
	let uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
		/[xy]/g,
		function (c) {
			var r = (Math.random() * 16) | 0,
				v = c == "x" ? r : (r & 0x3) | 0x8;
			return v.toString(16);
		},
	);
	let pWindow = document.createElement("div");
	pWindow.classList.add("photon-window");
	pWindow.classList.add("mat-thick");

	// weird workaround for a bug in the view transitions api
	if (id === "ca.bomberfish.solarcal") {
		pWindow.classList.add("noblur");
	}

	if (width)
		pWindow.style.width = width;

	if (height)
		pWindow.style.height = height;

	pWindow.classList.add("hidden");
	pWindow.id = id + "-" + uuid;
	let titleBar = document.createElement("div");
	titleBar.classList.add("photon-window-title");
	// titleBar.classList.add("mat-thin");
	pWindow.appendChild(titleBar);
	console.debug(`[Photon] Adding element: photon-window-titleText`);

	// titleBar.appendChild(document.createElement("span"));
	let titleBarIcon = document.createElement("img");
	titleBarIcon.classList.add("photon-window-icon");
	if (icon !== undefined) {
		titleBarIcon.src = icon;
		titleBar.appendChild(titleBarIcon);
	} else {
		titleBar.appendChild(document.createElement("placeholder")); // flexbox shenanigans
	}

	let titleTextEl = document.createElement("span");
	let titleText;
	if (title) {
		titleText = title;
	} else {
		if (new DOMParser().parseFromString(contents, "text/html").tagName === "IFRAME") {
			titleText = contents.src;
			pWindow.titleElement = titleTextEl;
		} else {
			const title = new DOMParser().parseFromString(contents, "text/html").querySelector("title");
			if (title) {
				titleText = title.innerText;
			}
		}
	}
	if (!titleText) titleText = "Untitled Window";
	console.debug(`[Photon] Adding title: ${titleText}`);
	titleTextEl.innerText = titleText;
	titleTextEl.classList.add("photon-window-titleText");
	titleBar.appendChild(titleTextEl);

	console.debug(`[Photon] Adding element: photon-window-actions`);
	let actions = document.createElement("div");
	actions.classList.add("photon-window-actions");
	titleBar.appendChild(actions);

	console.debug(`[Photon] Adding element: photon-min-btn`);
	let minBtn = document.createElement("button");
	minBtn.innerText = "_";
	minBtn.classList.add("photon-window-action");
	minBtn.classList.add("photon-min-btn");
	actions.appendChild(minBtn);

	if (resizable !== false) {
		console.debug(`[Photon] Adding element: photon-max-btn`);
		let maxBtn = document.createElement("button");
		maxBtn.innerText = "\u25A1";
		maxBtn.classList.add("photon-window-action");
		maxBtn.classList.add("photon-max-btn");
		actions.appendChild(maxBtn);
	}

	console.debug(`[Photon] Adding element: photon-close-btn`);
	let closeBtn = document.createElement("button");
	closeBtn.innerText = "\u2715";
	closeBtn.classList.add("photon-window-action");
	closeBtn.classList.add("photon-close-btn");
	actions.appendChild(closeBtn);

	[titleTextEl, minBtn, closeBtn].forEach((el) => {
		el.addEventListener("mouseenter", () => {
			console.debug("Mouse entered button");
			isMousingOverAWindowButton = true;
		});
		el.addEventListener("mouseleave", () => {
			console.debug("Mouse left button");
			isMousingOverAWindowButton = false;
		});
	});

	let content = document.createElement("div");
	content.classList.add("photon-window-content");
	content.innerHTML = contents
	// setInnerHTML(content, contents);
	pWindow.appendChild(content);

	if (resizable !== false) {
		pWindow.innerHTML += `
  <div class='resizers'>
      <div class='resizer vedge top-edge'></div>
      <div class='resizer vedge bottom-edge'></div>
      <div class='resizer hedge left-edge'></div>
      <div class='resizer hedge right-edge'></div>

      <div class='resizer corner top-left'></div>
      <div class='resizer corner top-right'></div>
      <div class='resizer corner bottom-left'></div>
      <div class='resizer corner bottom-right'></div>
    </div>`;

		makeResizableDiv(pWindow);
	}

	allWindows.appendChild(pWindow);

	Array.from(content.querySelectorAll("script")).forEach((el) => {
		eval(el.innerHTML);
	});

	dragModifier(document.getElementById(pWindow.id));
	setTimeout(() => {
		pWindow.classList.remove("hidden");
	}, 50);

	let button = document.createElement("span");
	button.classList.add("photon-taskbar-item");
	button.id = pWindow.id + "-taskbar";
	let inner = document.createElement("div");
	inner.classList.add("photon-taskbar-item-inner");
	if (icon !== undefined) {
		inner.style.backgroundImage = `url(${icon})`;
	}
	button.appendChild(inner);
	taskbar.querySelector(".photon-taskbar-buttons").appendChild(button);

	button.addEventListener("click", () => {
		document.getElementById(pWindow.id).classList.toggle("hidden");
		if (!document.getElementById(pWindow.id).classList.contains("hidden")) {
			pWindow.classList.add("active");
			Array.from(allWindows.querySelectorAll(".photon-window")).forEach((aWindow) => {
				if (aWindow.id !== pWindow.id) {
					aWindow.classList.remove("active");
					aWindow.style.zIndex = 1000 + windowsArr.indexOf(aWindow);
					aWindow.querySelectorAll(".photon-window-action").forEach((el) => {
						el.style.zIndex = 1001 + windowsArr.indexOf(aWindow);
					}
					);
				}
			});
		}
	});

	let windows = document.querySelectorAll(".photon-window");
	let windowsArr = Array.from(windows);
	pWindow.style.zIndex = 1000 + windowsArr.length * 2;
	pWindow.querySelectorAll(".photon-window-action").forEach((el) => {
		el.style.zIndex = 1001 + windowsArr.length * 2;
		el.addEventListener("click", () => {
			// print("clicked");
			if (el.classList.contains("photon-close-btn")) {
				document.getElementById(pWindow.id).classList.add("hidden");
				document
					.getElementById(pWindow.id + "-taskbar")
					.classList.add("hidden");

				document.getElementById("debugwinlist").innerHTML =
					"Open windows: " + allWindows.querySelectorAll(".photon-window").length + "<ul>";
				allWindows.querySelectorAll(".photon-window").forEach((el) => {
					document.getElementById("debugwinlist").innerHTML += "<li>" + el.id + "</li>";
				});
				document.getElementById("debugwinlist").innerHTML += "</ul>";


				setTimeout(() => {
					document.getElementById(pWindow.id).remove();
					document.getElementById(pWindow.id + "-taskbar").remove();

					let greatestIndexEl;
					Array.from(allWindows.querySelectorAll(".photon-window")).forEach((aWindow) => {
						console.debug("aWindow", aWindow);
						if (
							!greatestIndexEl ||
							aWindow.style.zIndex > greatestIndexEl.style.zIndex
						) {
							console.debug("greatestIndexEl", greatestIndexEl);
							greatestIndexEl = aWindow;
						}
					});

					if (greatestIndexEl) {
						console.debug("greatestIndexEl", greatestIndexEl);
						greatestIndexEl.classList.add("active");
						// greatestIndexEl.style.zIndex = 1000 + windowsArr.length * 2;
						setTimeout(() => {
							greatestIndexEl.getElementsByTagName("iframe")[0]?.contentWindow.focus();
						}, 50);
					}
				}, 300);
			} else if (el.classList.contains("photon-min-btn")) {
				document.getElementById(pWindow.id).classList.add("hidden");
			} else if (el.classList.contains("photon-max-btn")) {
				document.getElementById(pWindow.id).classList.toggle("maximized");

			}
		});
	});

	pWindow.classList.add("active");
	Array.from(allWindows.querySelectorAll(".photon-window")).forEach((aWindow) => {
		if (aWindow.id !== pWindow.id) {
			aWindow.classList.remove("active");
			aWindow.style.zIndex = 1000 + windowsArr.indexOf(aWindow);
			aWindow.querySelectorAll(".photon-window-action").forEach((el) => {
				el.style.zIndex = 1001 + windowsArr.indexOf(aWindow);
			}
			);
		}
	});

	pWindow.addEventListener("click", () => {
		console.debug("clicked");
		let windows = allWindows.querySelectorAll(".photon-window");
		let windowsArr = Array.from(windows);
		windows.forEach((aWindow) => {
			if (aWindow.id !== pWindow.id) {
				aWindow.classList.remove("active");
				aWindow.style.zIndex = 1000 + windowsArr.indexOf(aWindow);
				console.debug("a", aWindow.style.zIndex);
				// console.debug(aWindow);
				aWindow.querySelectorAll(".photon-window-action").forEach((el) => {
					// console.debug(el);
					el.style.zIndex = 1001 + windowsArr.indexOf(aWindow);
					console.debug("ct", el.style.zIndex);
				});
			}
		});
		pWindow.classList.add("active");
		pWindow.style.zIndex = 1000 + windowsArr.length * 2;
		setTimeout(() => {
			pWindow.getElementsByTagName("iframe")[0]?.contentWindow.focus();
		}, 50);
		console.debug("p", pWindow.style.zIndex);
	});

	const frame = pWindow.getElementsByTagName("iframe")[0]
	if (frame) {
		frame.addEventListener("click", (e) => {
			e.preventDefault();
			console.debug("clicked");
			let windows = allWindows.querySelectorAll(".photon-window");
			let windowsArr = Array.from(windows);
			windows.forEach((aWindow) => {
				if (aWindow.id !== pWindow.id) {
					aWindow.classList.remove("active");
					aWindow.style.zIndex = 1000 + windowsArr.indexOf(aWindow);
					console.debug("a", aWindow.style.zIndex);
					// console.debug(aWindow);
					aWindow.querySelectorAll(".photon-window-action").forEach((el) => {
						// console.debug(el);
						el.style.zIndex = 1001 + windowsArr.indexOf(aWindow);
						console.debug("ct", el.style.zIndex);
					});
				}
			});
			pWindow.classList.add("active");
			pWindow.style.zIndex = 1000 + windowsArr.length * 2;
			setTimeout(() => {
				pWindow.getElementsByTagName("iframe")[0]?.contentWindow.focus();
			}, 50);
			console.debug("p", pWindow.style.zIndex);
		});
	}

	titleBar.querySelector(".photon-close-btn").onclick = () => {
		console.log("closing");
		document.getElementById(pWindow.id).classList.add("hidden");
		document.getElementById(pWindow.id + "-taskbar").classList.add("hidden");
		setTimeout(() => {
			document.getElementById(pWindow.id).remove();
			document.getElementById(pWindow.id + "-taskbar").remove();
		}, 300);
	};

	titleBar.querySelector(".photon-min-btn").onclick = () => {
		console.log("minimizing");
		document.getElementById(pWindow.id).classList.add("hidden");
	};

	// let title = pWindow.querySelector(".photon-window-title");
	// let titleHeight = window.getComputedStyle(titleBar).height.replace("px", "");
	// let elementHeight = window.getComputedStyle(pWindow).height.replace("px", "");

	// let heightForContents = elementHeight - titleHeight;
	// console.debug(heightForContents);

	// pWindow.querySelector(".photon-window-content").style.width =
	// 	pWindow.offsetWidth;
	// pWindow.querySelector(".photon-window-content").style.height =
	// 	heightForContents + "px";
	// pWindow.querySelector(".photon-window-contents").style.height =
	// 	heightForContents + "px";
	let contentsEl = pWindow.querySelector(".photon-window-contents");

	document.getElementById("debugwinlist").innerHTML =
		"Open windows: " + allWindows.querySelectorAll(".photon-window").length + "<ul>";
	allWindows.querySelectorAll(".photon-window").forEach((el) => {
		document.getElementById("debugwinlist").innerHTML += "<li>" + el.id + "</li>";
	});
	document.getElementById("debugwinlist").innerHTML += "</ul>";

	if (contentsEl.tagName === "IFRAME") {
		contentsEl.addEventListener('load', () => {
			try {
				let title = contentsEl.contentDocument.querySelector("title").innerText;
				console.debug(`[Photon] Setting iframe title: ${title}`, titleTextEl);
				let el = contentsEl.parentElement.getElementsByClassName("photon-window-titleText")[0] || contentsEl.parentElement.parentElement.getElementsByClassName("photon-window-titleText")[0] || titleTextEl;
				el.innerText = title;
			} catch (e) {
				console.error('[Photon] Error setting iframe title:', e);
			}
		});

		contentsEl.contentWindow.window.SOLAROS_VERSION = globalThis.SOLAROS_VERSION;
		contentsEl.contentWindow.window.SOLAROS_CODENAME = globalThis.SOLAROS_CODENAME;
		contentsEl.contentWindow.window.PHOTON_VERSION = globalThis.PHOTON_VERSION;
		contentsEl.contentWindow.window.PHOTON_CODENAME = globalThis.PHOTON_CODENAME;
	}
}

function closeWindow(id) {
	// const split = id.split("-");
	// strip the uuid
	// const bundleIdentifier = split[split.length - 1 - 5];

	document.getElementById(id).classList.add("hidden");
	document.getElementById(id + "-taskbar").classList.add("hidden");

	setTimeout(() => {
		document.getElementById(id).remove();
		document.getElementById(id + "-taskbar").remove();
	}, 300);
}

/**
 * Makes an element draggable.
 * @param {HTMLElement} elmnt - The element to make draggable.
 */
function dragModifier(elmnt) {
	let buttons = elmnt.querySelectorAll(".photon-window-action");
	var pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
	elmnt.querySelectorAll(".photon-window-title").forEach((el) => {
		el.addEventListener("mousedown", dragMouseDown);
		el.addEventListener("touchstart", dragMouseDown, { passive: false });
	});

	function dragMouseDown(e) {
		elmnt.style.transition = "none";
		e = e || window.event;
		e.preventDefault();
		pos3 = e.clientX;
		pos4 = e.clientY;
		window.addEventListener("mouseup", closeDragElement);
		window.addEventListener("touchend", closeDragElement, { passive: false });

		window.addEventListener("mousemove", elementDrag);
		window.addEventListener("touchmove", elementDrag, { passive: false });
	}

	function elementDrag(e) {
		e = e || window.event;
		e.preventDefault();

		let box = elmnt.getBoundingClientRect();

		pos1 = pos3 - e.clientX;
		pos2 = pos4 - e.clientY;
		pos3 = e.clientX;
		pos4 = e.clientY;

		if (box.top - pos2 < 0) {
			pos2 = box.top;
		}

		if (box.left - pos1 < 0) {
			pos1 = box.left;
		}

		if (box.right - pos1 > window.innerWidth) {
			pos1 = box.right - window.innerWidth;
		}

		if (box.bottom - pos2 > window.innerHeight) {
			pos2 = box.bottom - window.innerHeight;
		}

		elmnt.style.top = elmnt.offsetTop - pos2 + "px";
		elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
	}

	function closeDragElement() {
		window.removeEventListener("mouseup", closeDragElement);
		window.removeEventListener("touchend", closeDragElement, { passive: false });
		window.removeEventListener("mousemove", elementDrag);
		window.removeEventListener("touchmove", elementDrag, { passive: false });
		elmnt.style.transition = null;
	}
}

const minimum_size = 20;

function resize(element, width, height, left, top) {
	if (width !== null && width > minimum_size) {
		element.style.width = width + "px";
	}
	if (height !== null && height > minimum_size) {
		element.style.height = height + "px";
	}
	if (left !== null) {
		element.style.left = left + "px";
	}
	if (top !== null) {
		element.style.top = top + "px";
	}
}

function makeResizableDiv(element) {
	const resizers = element.querySelectorAll(".resizer");
	let original_width = 0;
	let original_height = 0;
	let original_x = 0;
	let original_y = 0;
	let original_mouse_x = 0;
	let original_mouse_y = 0;

	for (let i = 0; i < resizers.length; i++) {
		const currentResizer = resizers[i];
		function onMouseDown(e) {
			e.preventDefault();
			element.style.transition = "none";
			original_width = parseFloat(getComputedStyle(element, null).getPropertyValue("width").replace("px", ""));
			original_height = parseFloat(getComputedStyle(element, null).getPropertyValue("height").replace("px", ""));
			original_x = element.getBoundingClientRect().left;
			original_y = element.getBoundingClientRect().top;
			original_mouse_x = e.pageX;
			original_mouse_y = e.pageY;

			function onMouseMove(e) {
				let width = null;
				let height = null;
				let left = null;
				let top = null;

				switch (true) {
					case currentResizer.classList.contains("bottom-right"):
						width = original_width + (e.pageX - original_mouse_x);
						height = original_height + (e.pageY - original_mouse_y);
						break;

					case currentResizer.classList.contains("bottom-left"):
						width = original_width - (e.pageX - original_mouse_x);
						height = original_height + (e.pageY - original_mouse_y);
						left = original_x + (e.pageX - original_mouse_x);
						break;

					case currentResizer.classList.contains("top-right"):
						width = original_width + (e.pageX - original_mouse_x);
						height = original_height - (e.pageY - original_mouse_y);
						top = original_y + (e.pageY - original_mouse_y);
						break;

					case currentResizer.classList.contains("top-left"):
						width = original_width - (e.pageX - original_mouse_x);
						height = original_height - (e.pageY - original_mouse_y);
						left = original_x + (e.pageX - original_mouse_x);
						top = original_y + (e.pageY - original_mouse_y);
						break;

					case currentResizer.classList.contains("top-edge"):
						height = original_height - (e.pageY - original_mouse_y);
						top = original_y + (e.pageY - original_mouse_y);
						break;

					case currentResizer.classList.contains("right-edge"):
						width = original_width + (e.pageX - original_mouse_x);
						break;

					case currentResizer.classList.contains("bottom-edge"):
						height = original_height + (e.pageY - original_mouse_y);
						break;

					case currentResizer.classList.contains("left-edge"):
						width = original_width - (e.pageX - original_mouse_x);
						left = original_x + (e.pageX - original_mouse_x);
						break;
				}

				resize(element, width, height, left, top);
			}

			function stopResize() {
				element.style.transition = null;
				window.removeEventListener("mousemove", onMouseMove, { passive: false });
				window.removeEventListener("touchmove", onMouseMove);

				window.removeEventListener("mouseup", stopResize);
				window.removeEventListener("touchend", stopResize, { passive: false });
			}

			window.addEventListener("mousemove", onMouseMove);
			window.addEventListener("touchmove", onMouseMove, { passive: false });

			window.addEventListener("mouseup", stopResize);
			window.addEventListener("touchend", stopResize, { passive: false });
		}

		currentResizer.addEventListener("mousedown", onMouseDown);
		currentResizer.addEventListener("touchstart", onMouseDown, { passive: false });
	}
}
