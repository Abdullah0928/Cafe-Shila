<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '', 'cafe');

if (!$con) {
    die("Failed to connect with database: " . mysqli_connect_error());
}

// get the post records
$tablename = "checkout";

// database insert SQL code
$sql = "INSERT INTO $tablename (cardname, cardnumber, expmonth, expyear, cvvnumber) 
        VALUES ('$_POST[cardname]','$_POST[cardnumber]','$_POST[expmonth]','$_POST[expyear]','$_POST[cvvnumber]')";

// insert in database
$rs = mysqli_query($con, $sql);

if ($rs) {
    
    echo "<script>alert('Your order has been placed successfully!');</script>";
    header("Location: ./index.html");
} else {
    echo "Error: " . mysqli_error($con);
}


// close connection
mysqli_close($con);
?>