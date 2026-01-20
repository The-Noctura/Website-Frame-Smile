<?php
session_start();
require "../config/database.php";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email      = $_POST['email'];
    $password   = $_POST['password'];

    $name = $first_name . ' ' . $last_name;
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    try {
        $stmt = $conn->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );
        $stmt->bind_param("sss", $name, $email, $hashed_password);
        $stmt->execute();

        // ✅ redirect HANYA setelah insert berhasil
        header("Location: ../../src/login.html?status=register_success");
        exit;

    } catch (mysqli_sql_exception $e) {
        header("Location: ../../src/register.html?status=register_failed");
        exit;
    }

} else {
    header("Location: ../../src/register.html?status=invalid_access");
    exit;
}
