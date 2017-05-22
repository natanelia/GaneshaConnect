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
<body style="min-width:100%;background-color:black; color:#bbbbbb; font-family:Roboto">
	<?php 
		ini_set( 'error_reporting', E_ALL );
		ini_set( 'display_errors', true );
		include 'HeaderLogin.php'; 	
	?>
	
		<div class="container" style="margin: auto; width: 30%">
		<h2 style="font-family:'Roboto Thin'; margin-top:-80px; text-align:center; color:#ffffff"> Welcome back, admin!</h2>
			<br><br><br>
			<form action="">
				<div class="form-group"  style="width:500px; align:middle;">
					<label for="element-1" class="control-label">Username</label>
					<input type="text" id="element-1" class="form-control" >
					<br>
					<label for="element-2" class="control-label">Password</label>
					<input type="text" id="element-2" class="form-control">
					<br>
					<button type="button" class="btn btn-primary" style="float:right">Login </button>
				</div>

			</form>
		</div>

	<?php include 'Footer.php' ?>
	
	<!-- Latest compiled and minified JavaScript -->
	<script src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
</body>	
</html>