var cr = document.getElementById("Credits");
function showcredits() {
  cr.style.background = "#ffffffd1";
  cr.style.height = "65%";
  cr.style.width = "60%";
  cr.style.display = "block";
  cr.style.position = "fixed";
  cr.style.top = "50%";
  cr.style.left = "50%";
  cr.style.border = ".5px solid #111";
  cr.style.boxShadow = "10px 20px 30px #111";
}
function hidecredits() {
  cr.style.display = "none";
}
function credits(x, y) {
  if (x.matches) {
    document.getElementById("cr").style.top = "1%";
    document.getElementById("cr").style.left = "92%";
    //document.getElementById("clos").style.scale = "2";
    //document.getElementById("credit").style.size = "30px";
  } else if (y.matches) {
    document.getElementById("cr").style.top = "1%";
    document.getElementById("cr").style.left = "96%";
  } else {
    document.getElementById("cr").style.top = "1%";
    document.getElementById("cr").style.left = "94%";
  }
}

var x = window.matchMedia("(max-width: 700px)");
var y = window.matchMedia("(min-width: 600px)");
credits(x, y);
x.addListener(credits);
y.addListener(credits);

function readmore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Show more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Show less";
    moreText.style.display = "inline";
  }
}
