function Icon() {
  let icon = document.createElement("i");
  icon.style.color = "white";
  icon.style.fontSize = "1.5em";
  icon.style.display = "inline-block";
  icon.style.background = "url('/icons/info.svg')";
  icon.style.backgroundSize = "cover";
  icon.innerText = "0";
  icon.style.content = "";
  document.getElementById("description").appendChild(icon);
}

export default Icon;
