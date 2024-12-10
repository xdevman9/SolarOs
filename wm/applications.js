"use strict";

async function getAllApplications() {
  console.info("[Photon] Getting all applications");
  let response = await fetch("/applications/index.json");
  console.debug(response);
  let json = await response.json();
  console.debug(json);
  let apps = json.applications;
  console.debug(apps);
  return apps;
}

function openApplication(bundle) {
  console.info(`[Photon] Opening application: ${bundle}`);
  fetch(`/applications/${bundle}/Info.json`).then((response) => {
    console.debug(response);
    response.json().then((json) => {
      console.debug(json);
    //   let name = json.name;
      let bundleID = json.bundleIdentifier;
      var icon;
      if (json.iconName !== undefined) {
        icon = `/applications/${bundle}/${json.iconName}`;
      }

      if (json.frameless === true) {
		var alreadyOpen = false;
		Array.from(document.getElementsByClassName("photon-window")).forEach((el) => {
			if (el.id.startsWith(bundleID)) {
				alreadyOpen = true;
			}
		})

		// Having multiple instances of the same frameless app open causes major jank
		if (alreadyOpen) {
			// TODO: Bring open window to front
			return;
		}

        var src;
        if (json.webview === true) {
          src = json.src;
        } else {
          src = `/applications/${bundle}/index.html`;
        }
        fetch(src)
          .then((res) => res.text())
          .then((data) => {
            createWindow(
              `<div class="photon-window-contents">${data}</div>`,
              undefined,
              bundleID,
              icon,
			  json.width,
			  json.height,
			  json.resizable
            );
          });
      } else {
        if (json.webview === true) {
          createWindow(
            `<iframe class="photon-window-contents" src="${json.src}"></iframe>`,
            undefined,
            bundleID,
            icon,
			json.width,
			json.height,
			json.resizable
          );
        } else {
          createWindow(
            `<iframe class="photon-window-contents" src="/applications/${bundle}/index.html"></iframe>`,
            undefined,
            bundleID,
            icon,
			json.width,
			json.height,
			json.resizable
          );
        }
      }
    });
  });
}
