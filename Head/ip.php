<?php


// set IP address and API access key
$ip =  "59.97.45.55";
$access_key = '865cbffe7613c0e3cacb715b1cbe77f0';
$field = 'continent_name,country_name,region_name,city,zip,latitude,longitude,connection.isp';

// Initialize CURL:
$ch = curl_init('http://api.ipstack.com/'.$ip.'?access_key='.$access_key.'&fields='.$field.'&security=1');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Store the data:
$json = curl_exec($ch);
curl_close($ch);

// Decode JSON response:
$api_result = json_decode($json, true);

// Output the "capital" object inside "location"

echo $api_result['continent_name'];
echo '<br>';
echo $api_result['country_name'];
echo '<br>';
echo $api_result['region_name'];
echo '<br>';
echo $api_result['city'];
echo '<br>';
echo $api_result['zip'];
echo '<br>';
echo $api_result['longitude'];
echo '<br>';
echo $api_result['latitude'];

 ?>
