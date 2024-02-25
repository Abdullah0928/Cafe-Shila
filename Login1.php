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
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Use prepared statements to prevent SQL injection
    $sql = "SELECT * FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row["password"])) {
            // The user is authenticated

            // Redirect the user to the desired page
            header("Location: ./carvilla-v1.0/index.php");
            exit();
        } else {
            echo "Invalid password";
        }
    } else {
        echo "Username not found";
    }

    // Close the prepared statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
