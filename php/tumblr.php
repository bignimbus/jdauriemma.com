<?php

$tumblrInfo = fopen("data/tumblr.json", "w") or die("Unable to open file!");

$tumblrUrl = 'http://jdauriemma.tumblr.com/api/read/json';

$response = file_get_contents($tumblrUrl);

$response = substr(substr($response, 22), 0, -2);

// $response = substr($response, ;

fwrite($tumblrInfo, $response);

?>