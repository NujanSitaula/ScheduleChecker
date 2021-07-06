<?php
//Connecting To Database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test";

// Checking Connection
$conn = new mysqli($servername, $username, $password, $dbname);
// If error exist
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}
?>
