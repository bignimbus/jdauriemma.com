<?php

$tumblrInfo = fopen("data/tumblr.json", "w") or die("Unable to open file!");

$tumblrUrl = 'http://jdauriemma.tumblr.com/api/read/json';

$response = file_get_contents($tumblrUrl);

$responseJSON = substr($response, 22, -1);

fwrite($tumblrInfo, $responseJSON);

?>
