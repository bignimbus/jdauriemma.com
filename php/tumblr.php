<?php

$tumblrInfo = fopen("data/tumblr.json", "w") or die("Unable to open file!");

$tumblrUrl = 'http://jdauriemma.tumblr.com/api/read/json';

$response = file_get_contents($tumblrUrl);

$responseJSON = substr(substr($response, 22), 0, -2);

fwrite($tumblrInfo, $responseJSON);

?>