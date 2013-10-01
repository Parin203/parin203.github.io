<?php
require_once 'mongo.php';
$database = 'Todo';
$collection = 'todo';
$mongo = new MyMongo($database,$collection);

$input_array = json_decode(file_get_contents('php://input'),1);

$id = new MongoId($input_array['id']);
$query = array('_id' => $id); 
$mongo->remove($query);
$mongo->close();
echo 'success';
?>