<?php
require_once 'php/mongo.php';
//$input_array = json_decode(file_get_contents('php://input'),1));

//add todo to database
$database = 'Todo';
$collection = 'todo';
$mongo = new MyMongo($database,$collection);
$query = array('title'  => 'authorization');
$add   = array('$set' => array('tags' => ['programming','my_project']));
$mongo->update($query,$add);
$mongo->close();
echo 'success';


?>