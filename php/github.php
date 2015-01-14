<?php
$githubInfo = fopen("data/github.json", "w") or die("Unable to open file!");
$repoUrl = "https://api.github.com/users/bignimbus/repos?sort=updated";
$gistUrl = "https://api.github.com/users/bignimbus/gists?sort=updated";
$options  = array('http' => array('user_agent'=> $_SERVER['HTTP_USER_AGENT']));
$context  = stream_context_create($options);

$repos = json_decode(file_get_contents($repoUrl, false, $context));
$gists = json_decode(file_get_contents($gistUrl, false, $context));

$newData = array();
foreach ($repos as $key=>$value) {
    $parentURL = $repos[$key]->url;
    $parentInfo = json_decode(file_get_contents($parentURL, false, $context), true);
    $newData[$key] = array(
        "repo"=>$repos[$key],
        "parent"=>$parentInfo
    );
}
$response = array(
    "repos"=>$newData,
    "gists"=>$gists
);
fwrite($githubInfo, json_encode($response));
?>