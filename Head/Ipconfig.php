<?php

require "UserInformation.php";




$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ip";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection





$ip = "134.201.250.15";
$access_key = '865cbffe7613c0e3cacb715b1cbe77f0';
$field = 'country_name,latitude,longitude';

// Initialize CURL:
$ch = curl_init('http://api.ipstack.com/'.$ip.'?access_key='.$access_key.'&fields='.$field.'&security=1');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$api_result = json_decode($json, true);









$stmt = $conn->prepare("INSERT INTO track (ip, page, lon, lat, country, ctime) VALUES (? ,? ,? ,? ,? ,?)");
$stmt->bind_param("ssssss", $ip, $page, $lon, $lat, $country, $ctime);




$ip = "134.201.250.15";
$page = $pg;
$lon = $api_result['longitude'];
$lat = $api_result['latitude'];
$country = $api_result['country_name'];
$ctime = date("Y-m-d H:i:s");
$stmt->execute();

$stmt->close();
$conn->close();









 ?>
