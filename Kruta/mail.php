<?php

$recepient = "s-zap@ukr.net";
$sitename = "<FRESH FOOD>";

$company = trim($_POST["company"]);
$name = trim($_POST["Name"]);
$adres = trim($_POST["adres"]);
$zakaz = trim($_POST["zakaz"]);
$calendar = trim($_POST["calendar"]);
$time = trim($_POST["time"]);
$people = trim($_POST["people"]);
$phone = trim($_POST["phone"]);
$money = trim($_POST["money"]);

$message = "Имя: $name \nТелефон: $phone \nКомпания: $company \nАдрес: $adres \nАдрес $adres \nЗаказ: $zakaz \nЗАказано на: $calendar \nВ какое время: $tive \nКоличество человек: $people \nСпособ оплаты $money";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");