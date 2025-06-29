<?php
include 'db_connect.php'; // تضمين ملف الاتصال

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $license_document = $_FILES['license']['name'];
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["license"]["name"]);

    // رفع الملف
    if (move_uploaded_file($_FILES["license"]["tmp_name"], $target_file)) {
        $sql = "INSERT INTO Stores (name, email, password, license_document) VALUES ('$name', '$email', '$password', '$license_document')";
        if ($conn->query($sql) === TRUE) {
            echo "تم تسجيل المتجر بنجاح!";
        } else {
            echo "خطأ: " . $conn->error;
        }
    } else {
        echo "فشل في رفع ملف الترخيص.";
    }

    $conn->close();
}
?>
<form method="POST" enctype="multipart/form-data">
    <input type="text" name="name" placeholder="اسم المتجر" required>
    <input type="email" name="email" placeholder="البريد الإلكتروني" required>
    <input type="password" name="password" placeholder="كلمة المرور" required>
    <input type="file" name="license" required>
    <button type="submit">تسجيل المتجر</button>
</form>
