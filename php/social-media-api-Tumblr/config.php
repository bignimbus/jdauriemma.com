<?php
// Define the needed keys
$customerKey = file_get_contents('../../access/tumblr-customer.txt');
$secretKey = file_get_contents('../../access/tumblr-customer-secret.txt');

// The callback URL is the script that gets called after the user authenticates with tumblr
// In this example, it would be the included callback.php
$strCallbackUrl = "http://localhost/tumblrdemo/callback.php";

define('CONSUMER_KEY', $customerKey);
define('CONSUMER_SECRET', $secretKey);
define('CALLBACK', $strCallbackUrl);

?>