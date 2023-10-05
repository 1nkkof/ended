
<?php

$connect = mysqli_connect('localhost','root','','BookTreeBD');
    if(!$connect){
        die('Error connect to DataBase'.mysqli_connect_error());
    }

return $connect;
?>