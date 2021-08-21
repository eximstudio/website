<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-W7EGVWQ1VM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-W7EGVWQ1VM');
</script>
    <meta charset="utf-8">
    <meta name="theme-color" content="#111">
    <title>Numerus</title>
    <link rel="stylesheet" href="../css/mob.css">
    <link rel="shortcut icon" href="../../img/favicon.jpg" type="image/jpg">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
    <style>
      h1{
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-200%);
        font-size: 70px;
        font-family: 'Roboto Slab', serif;
      }
      h2{
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 30px;
        font-family: 'Oswald', sans-serif;
      }
    </style>
  </head>
  <body style="background:#111">
    <?php
     require "../Head/header.php"
      ?>
   <h1>Numerus</h1>
   <h2>Comming Soon..!</h2>

   <div id="particles-js" style="z-index:-1;height:92vh"></div>

   <!-- scripts -->
   <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js"></script>
   <script src="../js/app3.js"></script>
    <script>
        function border() {
          var x = document.getElementById("math");
          x.className = "active";
        //  document.getElementById("particles-js").style.position = "fixed";
        }
        border();
   function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    </script>
  </body>
</html>
