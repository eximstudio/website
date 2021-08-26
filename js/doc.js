let opened = false,
  icon,
  doc;
const handleToggle = () => {
  icon.classList.toggle("open");
  doc.style.right = opened ? "-51%" : "0%";
  doc.style.opacity = opened ? "0.5" : "1";
  opened = !opened;
  icon.style.left = opened ? "-25px" : "-130%";
  icon.style.opacity = "1";
};
async function Icon() {
  icon = document.createElement("i");
  doc = document.getElementById("description");
  icon.classList.add("close");
  icon.classList.add("icon");
  if (!doc) return;
  doc.prepend(icon);
  icon.addEventListener("click", handleToggle);
}

export { Icon };
export { handleToggle, opened };
