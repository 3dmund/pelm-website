<?php

$name = $_POST['name'];
$email = $_POST['email'];
$company = $_POST['company'];
$message = $_POST['message'];
$to = "info@portertech.io";
$subject = "New message from " . $name . " at company: " . $company . " with email: " . $email;

mail ($to, $subject, $message, $name);
?>