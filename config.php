<?php

# Конфигурация
$servername = 'localhost';
$username = 'root';
$password = 'password';
$dbname = 'crm_db';

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
	echo 'Соединение не удалось: ' . $conn->connect_error;
	exit;
}
