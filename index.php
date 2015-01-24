<!DOCTYPE html>
<html lang="en">
<head>
	<link rel="stylesheet" type="text/css" href="styles/style.css" />
	<?php
		echo '<script>window.rootDir = "'.__DIR__.'";</script>';
	?>
	<script src="bower_components/jquery/dist/jquery.min.js"></script>
	<script src="bower_components/underscore/underscore-min.js"></script>
	<script src="bower_components/backbone/backbone.js"></script>
	<meta charset="utf-8" />
	<title>Jeffrey Auriemma</title>
	<link rel="shortcut icon" href="favicon/favicon.ico">
	<link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-touch-icon-152x152.png">
	<link rel="icon" type="image/png" href="favicon/favicon-64x64.png" sizes="64x64">
	<link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32">
	<meta name="msapplication-TileColor" content="#00aba9">
	<meta name="msapplication-TileImage" content="favicon/mstile-150x150.png">
	<meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png">
	<meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png">
	<meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png">
	<meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png">
	<meta name="description" content="Likes JavaScript and Music">
	<meta name="keywords" content="music, teaching, teacher, chicago, new jersey, programmer, javascript, html">
	<meta name="author" content="Jeffrey Auriemma">
</head>
<body>
<div id="container">
	<header>
		<hgroup>
			<div class = "left">
				<img src = "images/skylineleft.png" style="width:16em; height:5em;">
			</div>
			<div class = "center">
					<h1>
					Jeffrey<br/>
					Auriemma
					</h1>
				</div>
			<div class = "right">
				<img src = "images/skylineright.png" style="width:16em; height:5em;">
			</div>
		</hgroup>
	</header>
	<div id="navbar"></div>
	<article></article>
	<div class="bottom">
		<footer>
			<p class="foot"><a href="https://plus.google.com/103012711732663079514/?
   rel=author">This site was designed and developed by Jeffrey Auriemma.</a></p>
		</footer>
	</div>
</div>
<script data-main="js/app" src="bower_components/requirejs/require.js"></script>
</body>
</html>