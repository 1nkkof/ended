<?php

include_once("./vendor/connect.php"); 

$id = $_POST['id'];
$status = $_POST['status'];

$query = "UPDATE `bd_connect` SET `status` = '$status' WHERE `bd_connect`.`id` = '$id'";
$data = mysqli_query($connect, $query);

header('Location: ./adminPage.php');
?>