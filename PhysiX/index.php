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
    <title>PhysiX Beta</title>
    <link rel="stylesheet" href="../css/mob.css">
    <meta name="theme-color" content="#111">
    <link rel="shortcut icon" href="../../img/favicon.jpg" type="image/jpg">
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200&family=Roboto+Slab:wght@300&display=swap" rel="stylesheet">
    <style>
      h1{
        color: #fff;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 70px;
        font-family: 'Roboto Slab', serif;
        -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
      }
      h2{
        color: #049ef4;
        text-decoration:none;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 30px;
        font-family: 'Oswald', sans-serif;
        -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers (e.g. Konqueror) */
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
      }
      .sup{
        font-size:30px;
        -moz-user-select: none; /* Firefox */
      -ms-user-select: none; /* Internet Explorer */
   -khtml-user-select: none; /* KHTML browsers*/
  -webkit-user-select: none; /* Chrome, Safari, and Opera */
  -webkit-touch-callout: none; /* Disable Android and iOS callouts*/
      }
      @media screen and (max-width: 600px) {
        .sup{
          font-size:18px;
        }
      }
    </style>
  </head>
  <body style="background:#111">
    <?php
     require "../Head/header.php"
      ?>
   <h1>PhysiX <sup class="sup">Beta</sup></h1>
   <a href="ripples"><h2>Ripples on the surface of water</h2></a> 

   <div id="particles-js" style="z-index:-1;height:92vh"></div>

   <!-- scripts -->
   <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.js"></script>
   <script src="../js/app.js"></script>
    <script>
        function border() {
          var x = document.getElementById("phy");
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
