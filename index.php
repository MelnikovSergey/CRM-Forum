<?php

/* Настройки */
include 'config.php';

echo '<pre>';
	print_r($_REQUEST['page']);
echo '</pre>';

/* Форум */
if(!$_REQUEST['page'] || $_REQUEST['page'] === 'forum') {
	include 'forum.php';
	exit;	
}

/* Регистрация */
if($_REQUEST['page'] === 'reg') {
	include 'reg.php';
	exit;
}

echo 'Ошибка 404 - Страница не указана! <a href="/">Вернуться на главную</a>';
