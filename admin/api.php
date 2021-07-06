<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
 
include('config.php');


$result = mysqli_query($conn, "SELECT * FROM extraclass");

$data = array();
while ($row = mysqli_fetch_assoc($result)){
    
    $data[] = $row;
}

echo json_encode($data);

?>