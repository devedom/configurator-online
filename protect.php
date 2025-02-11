<?php
    $password = 'verpan2024';

    if (empty($_COOKIE['password']) || $_COOKIE['password'] !== $password) {
        header('Location: login.php');
        exit;
    }
?>