<?php
require_once('../php/getID3-1.9.7/getid3/getid3.php');
$getID3 = new getID3;
	$dir = './mp3';
	$music = scandir($dir);
	$title = array();
	$comment = array();
	$musicinfo = array();
	$filename = array();
	$playlist = array();
		foreach($music as $key=>$value) {
			$fileinfo = $getID3->analyze("./mp3/".$music[$key]);
			$playlist[$key] = array(
				$music[$key],
				$fileinfo['tags']['id3v1']['title'][0],
				$fileinfo['tags']['id3v1']['artist'][0],
				$fileinfo['tags']['id3v1']['comment'][0]
			 );
		}
	echo json_encode($playlist);
?>