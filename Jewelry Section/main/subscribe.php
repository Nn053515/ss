<?php
include 'db_connect.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $sql = "SELECT * FROM subscribers WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "هذا البريد الإلكتروني مشترك بالفعل.";
    } else {
        $sql = "INSERT INTO subscribers (email) VALUES ('$email')";

        if ($conn->query($sql) === TRUE) {
            echo "تم الاشتراك بنجاح!";
        } else {
            echo "حدث خطأ: " . $conn->error;
        }
    }

    $conn->close(); 
}
?>
