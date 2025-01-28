<?php
    // Datu baserako konexioko parametroak
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "izena";

    // Konexioa egin
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Konexioa egiaztatu
    if ($conn->connect_error) {
        die("Konexioarekin arazo bat egon da: " . $conn->connect_error);
    }
?>
