<?php
    // Datu baserako konexioko parametroak
    $servername = "localhost:3307";
    $username = "root";
    $password = "";
    $dbname = "";

    // Konexioa egin
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Konexioa egiaztatu
    if ($conn->connect_error) {
        die("Konexio errorea: " . $conn->connect_error);
    }
?>
