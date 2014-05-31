<?php

require_once './twitter-php-master/src/twitter.class.php';

// enables caching (path must exists and must be writable!)
// Twitter::$cacheDir = dirname(__FILE__) . '/temp';


// ENTER HERE YOUR CREDENTIALS (see readme.txt)
$consumerKey = 'vP819IxNrWpQ91wLWjgikg';
$consumerSecret = 'CUdYqCHEjKeoO0kDbQ7PhCVRgy6alvvjSYmtF3hx70';
$accessToken = '34071928-us7S9MWSMydtz7jskaqeXbBC6FiPuFdCI2tC9AATr';
$accessTokenSecret = 'Tave2SODKFfF03WRIh3EH7hVHS2rDxjDxtUv6oltfDoXO';

$twitter = new Twitter($consumerKey, $consumerSecret, $accessToken, $accessTokenSecret);

//$statuses = $twitter->load(Twitter::ME);
$statuses = $twitter->request('statuses/user_timeline', 'GET');

echo json_encode($statuses);

?>