const tooltip = document.getElementById("photon-tooltip");
function showTooltip(text, x, y) {
  tooltip.innerText = text;
  tooltip.style.top = y + "px";
  tooltip.style.left = x + "px";
  tooltip.classList.remove("hidden");
}

function hideTooltip() {
  tooltip.classList.add("hidden");
}

function showTooltipForElement(text, element) {
  const rect = element.getBoundingClientRect();
  showTooltip(text, rect.x, rect.y);
}
