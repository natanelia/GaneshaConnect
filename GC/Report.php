<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<title>Login</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css">
</head>
<body style="min-width:100%;background-color:#E9EBEE; color:#555555; font-family:Roboto">
	<?php 
		ini_set( 'error_reporting', E_ALL );
		ini_set( 'display_errors', true );
		include 'Header.php'; 	
	?>
	<div style="margin: auto; width: 60%; min-width: 1024px">
		<!-- PANEL IS LOOP-ABLE (4 COLUMN) -->
		<div class="panel" style="height:248px; width:248px; float:left; padding:15px; margin:4px">
			<div style="text-align:center"><img src="assets/toilet.jpg" style="width:100px; height:100px;"/></div>
			<br>
			<h4 style="margin-top:3px;"><a href="DetailReport.php">Toilet Labtek V Emas</a></h4>
			<h5 style="margin-top:-3px;font-family:'roboto'">Taufiq Akbar Rosyadi</h5>		
			<h6 style="margin-top:-3px;font-family:'roboto'">4 November 2016 12:12</h6>
		</div>
	</div>
	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>		
</html>