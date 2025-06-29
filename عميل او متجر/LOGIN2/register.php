<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

include 'db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $license_document = $_FILES['image'];

    // File upload handling
    $target_dir = "uploads/";
    $target_file = $target_dir . uniqid() . "_" . basename($license_document["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Validate file type
    $allowed_types = ['jpg', 'jpeg', 'png', 'pdf'];
    if (!in_array($imageFileType, $allowed_types)) {
        echo "Only JPG, JPEG, PNG, and PDF files are allowed.";
        $uploadOk = 0;
    }

    // Check file size (limit to 5MB)
    if ($license_document["size"] > 5 * 1024 * 1024) {
        echo "File size exceeds 5MB limit.";
        $uploadOk = 0;
    }

    // Attempt to move uploaded file if validations pass
    if ($uploadOk && move_uploaded_file($license_document["tmp_name"], $target_file)) {
        // Insert data into the `stores` table
        $sql = "INSERT INTO stores (name, email, password, license_document, created_at) VALUES (?, ?, ?, ?, NOW())";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssss", $name, $email, $password, $target_file);

        if ($stmt->execute()) {
            // Redirect to a success page after account creation
            header("Location: index.html");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "Failed to upload license document.";
    }

    $conn->close();
}
?>
