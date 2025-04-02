<?php
    session_start();
    $password = 'verpan2024';

    if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
        header('Location: login.php');
        exit;
}