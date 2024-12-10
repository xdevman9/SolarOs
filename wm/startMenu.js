"use strict";

function initStartMenu() {
  console.info("[Photon] Start menu init called");
  let startMenu = document.createElement("div");
  startMenu.id = "photon-start-menu";
  startMenu.classList.add("hidden");
  startMenu.classList.add("mat-thick");
  getAllApplications().then((apps) => {
    console.debug(apps);
    apps.forEach((app) => {
      addStartMenuItem(app);
    });
  });
  desktop.appendChild(startMenu);
}

function addStartMenuItem(appBundleName) {
  console.debug(`[Photon] Adding start menu item for ${appBundleName}`);
  let path = `/applications/${appBundleName}`;
  let menuItem = document.createElement("div");
  menuItem.classList.add("photon-start-menu-item");
  let info = `${path}/Info.json`;
  fetch(info)
    .then((res) => res.json())
    .then((data) => {
      let img = document.createElement("img");
      if (data.iconName !== undefined) {
        img.src = `${path}/${data.iconName}`;
      } else {
        img.src = "/resources/macwindow.svg";
      }
      img.classList.add("photon-start-menu-item-icon");
      menuItem.appendChild(img);
      let title = document.createElement("span");
      title.classList.add("photon-start-menu-item-title");
      title.innerText = data.name;
      menuItem.appendChild(title);
    });
  menuItem.addEventListener("click", () => {
    openApplication(appBundleName);
    document.getElementById("photon-start-menu").classList.add("hidden");
  });
  document.getElementById("photon-start-menu").appendChild(menuItem);
}
