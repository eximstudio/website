let opened = false,
  icon,
  doc,
  tooltip;
function toggletip(display) {
  tooltip.style.opacity = display ? ".8" : "0";
}

export default Icon;

const handleToggle = () => {
  icon.classList.toggle("open");
  doc.style.right = opened ? "-51%" : "0%";
  opened = !opened;
  icon.style.left = opened ? "-25px" : "-130%";
  tooltip.innerHTML = opened ? "Close" : "Learn more";
};

async function Icon() {
  icon = document.createElement("i");
  tooltip = document.createElement("span");
  doc = document.getElementById("description");
  icon.appendChild(tooltip);
  tooltip.innerHTML = "Learn more";
  tooltip.className = "tooltip";
  tooltip.style.pointerEvents = "none";
  icon.classList.add("close");
  icon.classList.add("icon");
  if (!doc) return;
  doc.prepend(icon);
  icon.addEventListener("click", handleToggle);
  icon.addEventListener("mouseover", () => toggletip(true));
  icon.addEventListener("mouseout", () => toggletip(false));
}

export { handleToggle, opened, Icon };
