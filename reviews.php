<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "sun"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle new comment submission
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['comment'])) {
    $comment = $_POST['comment'];

    // Insert the new comment into the database
    $sql = "INSERT INTO comments (comment_text) VALUES ('$comment')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["status" => "success", "message" => "New comment added successfully!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Error: " . $conn->error]);
    }
    exit; // Exit after processing the POST request
}

// Fetch reviews from the database
$reviews_sql = "SELECT * FROM reviews ORDER BY created_at DESC";
$reviews_result = $conn->query($reviews_sql);

$reviews = [];
if ($reviews_result->num_rows > 0) {
    while ($row = $reviews_result->fetch_assoc()) {
        $reviews[] = [
            'review_text' => $row['review_text'],
            'reviewer_name' => $row['reviewer_name'],
            'reviewer_title' => $row['reviewer_title'],
            'reviewer_image' => $row['reviewer_image']
        ];
    }
}

// Return reviews as JSON
echo json_encode(["reviews" => $reviews]);

$conn->close();
?>
