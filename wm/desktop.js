// bomberfish
// PhotonWM: A window manager for the web.

"use strict";

var desktop;
function initDesktop() {
  console.info("[Photon] Desktop init called");
  const desktopTemp = document.createElement("div");
  desktopTemp.id = "photon-desktop";
  mainApp.append(desktopTemp);
  desktop = document.getElementById("photon-desktop");
}
