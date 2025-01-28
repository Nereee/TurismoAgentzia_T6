<?php
    session_start();
    $izena = $_POST['erabiltzailea'];
    $_SESSION['erabiltzailea'] = $izena;
?>