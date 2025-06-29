<?php
// Database connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sun";

// Create the connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // You can remove this line later after confirming connection is successful
    echo "Connected to the database successfully!";
}
?>
