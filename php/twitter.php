<?php

require_once 'twitter-php-master/src/twitter.class.php';
$twitterFile = fopen("data/twitter.json", "w") or die("Unable to open file!");
// enables caching (path must exists and must be writable!)
// Twitter::$cacheDir = dirname(__FILE__) . '/temp';

// ENTER HERE YOUR CREDENTIALS (see readme.txt)
$consumerKey = file_get_contents('../access/twitter-consumer.txt');
$consumerSecret = file_get_contents('../access/twitter-consumer-secret.txt');
$accessToken = file_get_contents('../access/twitter-access.txt');
$accessTokenSecret = file_get_contents('../access/twitter-access-secret.txt');

$twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

//$statuses = $twitter->load(Twitter::ME);
$statuses = $twitter->request('statuses/user_timeline', 'GET');

fwrite($twitterFile, json_encode($statuses));

?>