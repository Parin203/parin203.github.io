<?php
require_once 'mongo.php';
$database = 'Todo';
$collection = 'todo';
$mongo = new MyMongo($database,$collection);
echo json_encode($mongo->find_all());
?>