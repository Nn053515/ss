<?php
include 'db_connect.php'; // تضمين ملف الاتصال

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM Users WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "مرحبًا " . $row['name'] . "! تم تسجيل الدخول بنجاح.";
        } else {
            echo "كلمة المرور غير صحيحة!";
        }
    } else {
        echo "البريد الإلكتروني غير موجود!";
    }

    $conn->close(); // إغلاق الاتصال
}
?>
<form method="POST">
    <input type="email" name="email" placeholder="البريد الإلكتروني" required>
    <input type="password" name="password" placeholder="كلمة المرور" required>
    <button type="submit">تسجيل الدخول</button>
</form>
