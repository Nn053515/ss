<?php
include 'db_connect.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check email in the `stores` table
    $sql = "SELECT * FROM stores WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verify password
        if (password_verify($password, $row['password'])) {
            // Redirect to the desired page after successful login
            header("Location: ../../main/index.html");
            exit(); // Ensure no further code is executed after redirection
        } else {
            echo "Incorrect password!";
            
        }
    } else {
        echo "Email not found!";
    }

    $stmt->close();
    $conn->close();
}
?>
