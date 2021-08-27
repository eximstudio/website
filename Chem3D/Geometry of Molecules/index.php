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
    <meta name="theme-color" content="#111">
      <link rel="stylesheet" href="../../../css/home.css">
      <link rel="stylesheet" href="../../../css/mob.css">
      <link rel="stylesheet" href="../../../../css/style.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="shortcut icon" href="../../img/chem3d.jpg" type="image/jpg">
      <title>Geometry of Molecules</title>
    </head>
    <body style="background:#1c1c1c;">


<?php
  require "../../Head/header.php";
?>

   <a href="../"><i id="bbt" class="material-icons" style="font-size:20px;border: 1px solid #fff;background:#fff;text-decoration:none;border-radius:100%;color:#111;padding:7px 7px 7px 7px;box-shadow: 2px 2px 5px #545454;margin-top:5px;position:sticky;top:0.5%;left:0.5%;">arrow_back</i></a>

    <div id="search">
      <h2>Geometry of Molecules</h2>
      <input type="text" id="Input" onkeyup="Function()" placeholder="Search for 3D models..." title="Search for 3D models...">

      <ul id="UL">
        <h3>Linear</h3>
      	<li><a href="linear">Linear</a></li>
        <li><a href="chem stru_linear_1 lp">Linear (with 1 lone pair)</a></li>
        <h3>Trigonal planar</h3>
        <li><a href="trigonal planar">Trigonal planar</a></li>
        <li><a href="trigonal_planar_bent_1lp">Bent (trigonal planar with 1 lone pair)</a></li>
        <h3>Tetrahedral</h3>
        <li><a href="Tetrahedral">Tetrahedral</a></li>
        <li><a href="chem stru(trigonal planar) (1)">Trigonal pyramidal (Tetrahedral with 1 lone pair)</a></li>
        <li><a href="Bent (Tetrahedral with 2 lone pair)">Bent (Tetrahedral with 2 lone pair)</a></li>
        <h3>Trigonal bi-pyramidal</h3>
        <li><a href="chem stru(tbp)">Trigonal bi-pyramidal</a></li>
        <li><a href="chem stru_tbp_see-saw_1lp">Distorted tetrahedral or See-saw <br>(Trigonal bi-pyramidal with 1 lone pair) </a></li>
        <li><a href="chem stru_tbp_t shape_2lp">T-shape (Trigonal bi-pyramidal with 2 lone pair)</a></li>
        <li><a href="chem stru_tbp_linear_3lp">Linear (Trigonal bi-pyramidal with 3 lone pair)</a></li>
        <h3>Octahedral</h3>
        <li><a href="octa.html">Octahedral</a></li>
        <li><a href="chem stru_octahedral_square pyramidal_1lp">Square pyramidal (Octahedral with 1 lone pair)</a></li>
        <li><a href="chem stru_octahedral_square planar_2lp">Square planar (Octahedral with 2 lone pair)</a></li>
        <h3>Pentagonal bi-pyramidal</h3>
        <li><a href="chem stru(pentagonal bi piramidal)">Pentagonal bi-pyramidal</a></li>
        <li><a href="chem stru_pbp_distorted octahedral_1lp">Distorted octahedral (Pentagonal bi-pyramidal with 1 lone pair)</a></li>

      </ul>
    </div>
    <div id="particles-js" style="z-index:-1;"></div>

    <!-- scripts -->
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js"></script>
    <script src="../../js/app2.js"></script>

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
      document.getElementById("bbt").style.left = "8%";
      document.getElementById("bbt").style.top = "15%";
      document.getElementById("bbt").style.position = "fixed";
    }
    }

    var x = window.matchMedia("(max-width: 600px)")
    ction(x)
    x.addListener(ction)
    </script>
    <script>
        function border() {
          var x = document.getElementById("chem");
          x.className = "active";
          document.getElementById("particles-js").style.position = "fixed";
        }
        border();
    </script>
    </body>
  </html>
