<?php
include 'db_connect.php'; // Ensure this file contains the correct database connection

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get data from the form
    $client_name = $_POST['client_name'];
    $client_title = $_POST['client_title'];
    $review_text = $_POST['review_text'];
    $rating = $_POST['rating'];

    // Validate input to ensure it's not empty (you can add more validation as needed)
    if (empty($client_name) || empty($client_title) || empty($review_text) || empty($rating)) {
        echo "All fields are required!";
    } else {
        // Prepare SQL query to insert the review using prepared statements
        $stmt = $conn->prepare("INSERT INTO reviews (client_name, client_title, review_text, rating) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("sssi", $client_name, $client_title, $review_text, $rating);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Review submitted successfully!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    }
}

// Close the connection
$conn->close();
?>
