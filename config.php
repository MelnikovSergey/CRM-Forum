<?php

# Конфигурация
$servername = 'localhost';
$username = 'crm_user';
$password = 'crm_pass';
$dbname = 'crm_db';

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error) {
	echo 'Соединение не удалось: ' . $conn->connect_error;
	exit;
}
