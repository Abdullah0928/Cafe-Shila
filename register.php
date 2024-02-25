<?php
    $host = 'localhost'; // replace with your database host
    $username = 'root'; // replace with your database username
    $password = ''; // replace with your database password
    $database = 'user_registration';

    // Create a database connection
    $conn = new mysqli($host, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $full_name = $_POST["full_name"];
        $username = $_POST["username"];
        $email = $_POST["email"];
        $phone_number = $_POST["phone_number"];
        $password = password_hash($_POST["password"], PASSWORD_BCRYPT);
        $gender = $_POST["gender"];

        $sql = "INSERT INTO users (full_name, username, email, phone_number, password, gender) VALUES (?, ?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $full_name, $username, $email, $phone_number, $password, $gender);

        if ($stmt->execute()) {
            header("Location: login.php");
            exit();
        } else {
            echo "Error: " . $stmt->error;
        }

        $stmt->close();
    }

    // Close the database connection
    $conn->close();

  
  ?>