<!DOCTYPE html>
<html>
  <head>
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-W7EGVWQ1VM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W7EGVWQ1VM');
</script>
    <link rel="stylesheet" href="../css/home.css">
    <title>Chem3D__v2.1</title>
    <link rel="stylesheet" href="../css/mob.css">
    <meta name="theme-color" content="#111">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="shortcut icon" href="../img/chem3d.jpg" type="image/jpg">
  </head>
  <body style="background:#1c1c1c;">

<?php
require '../Head/header.php';
 ?>
  <div id="search">
    <input type="text" id="Input" onkeyup="Function()" placeholder="Search for 3D models..." title="Search for 3D models...">

    <ul id="UL">
      <li><a href="Geometry of Molecules/">Geometry of Molecules</a></li>
      <li><a href="Structure of Molecules/">Structure of Solids</a></li>
     <li><a disabled href="Organic/">Organic Reactions</a></li>
    </ul>
  </div>

  <!-- particles.js container -->
  <div id="particles-js"></div>

  <!-- scripts -->
  <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js"></script>
  <script src="../js/app2.js"></script>



  <script>
  function Function() {
      var input, filter, ul, li, a, i, txtValue;
      input = document.getElementById("Input");
      filter = input.value.toUpperCase();
      ul = document.getElementById("UL");
      li = ul.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("a")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              li[i].style.display = "";
          } else {
              li[i].style.display = "none";
          }
      }
  }
  </script>
  <script>
      function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
  </script>
  <script>
  function ction(x) {
  if (x.matches) {
    document.getElementById("search").style.width = "80%";
  } else {
    document.getElementById("search").style.width = "50%";
  }
  }
  var x = window.matchMedia("(max-width: 768px)")
  ction(x)
  x.addListener(ction)
  </script>
  <script>
      function border() {
        var x = document.getElementById("chem");
        x.className = "active";
      }
      border();
  </script>
  </body>
</html>
