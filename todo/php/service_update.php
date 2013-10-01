<?php
require_once 'mongo.php';
$database = 'Todo';
$collection = 'todo';
$mongo = new MyMongo($database,$collection);


$input_array = json_decode(file_get_contents('php://input'),1);
$input_array['date_added'] = date('Y-m-d');
$query = $input_array['id'];
$id = new MongoId($input_array['_id']['$id']);
bakino data doc ma je update karvanu 6 ema;
$mongo->save($input_array);
$mongo->close();
echo 'successfully added post';
//todo added





?>