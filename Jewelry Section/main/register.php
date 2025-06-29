<?php
include 'db_connect.php'; // تضمين ملف الاتصال

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT); // تشفير كلمة المرور

    $sql = "INSERT INTO Users (name, email, password) VALUES ('$name', '$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "تم التسجيل بنجاح!";
    } else {
        echo "خطأ: " . $conn->error;
    }

    $conn->close(); // إغلاق الاتصال
}
?>
<form method="POST">
    <input type="text" name="name" placeholder="الاسم" required>
    <input type="email" name="email" placeholder="البريد الإلكتروني" required>
    <input type="password" name="password" placeholder="كلمة المرور" required>
    <button type="submit">تسجيل</button>
</form>
