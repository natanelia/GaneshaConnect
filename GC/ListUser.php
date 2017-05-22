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
		<br>
		<h3>8 Users </h3>
		<br>
		<!-- PANEL IS LOOP-ABLE (2 COLUMN) -->
		<div class="panel" style="height:100px; width:500px; float:left; padding:12px; margin:4px">
			<img src="assets/taro.jpg" style="width:75px; height:75px; border-radius: 37.5px; float:left; margin-right:25px"/>
			<img src="assets/block.jpg" style="width:auto; height:75px; float:right; margin-right:25px"/>	
			<h4 style="margin-top:3px;">Nama ku Taro</h4>
			<h5 style="margin-top:-3px;font-family:'roboto condensed'">taro@students.itb.ac.id</h5>		
			<h5 style="margin-top:-3px;font-family:'roboto condensed'">Sistem Teknologi Informasi</h5>
		</div>
	</div>
	
	<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>		
</html>