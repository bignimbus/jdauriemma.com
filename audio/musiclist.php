<?php
require_once('../php/getID3-1.9.7/getid3/getid3.php');
$getID3 = new getID3;
$dir = './mp3';
$music = scandir($dir);
$playlist = array();

foreach($music as $key=>$value) {
	$fileinfo = $getID3->analyze("./mp3/".$music[$key]);
	$playlist[$key] = array(
		"file" => substr_replace($music[$key], '', -4),
		"title" => $fileinfo['tags']['id3v1']['title'][0],
		"performer" => $fileinfo['tags']['id3v1']['artist'][0],
		"role" => $fileinfo['tags']['id3v1']['comment'][0]
	 );
}

echo json_encode($playlist);
?>