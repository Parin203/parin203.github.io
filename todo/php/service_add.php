<?php
require_once 'mongo.php';
$database = 'Todo';
$collection = 'todo';
$mongo = new MyMongo($database,$collection);


$input_array = json_decode(file_get_contents('php://input'),1);
$input_array['date_added'] = date('Y-m-d');

$mongo->save($input_array);
$mongo->close();
echo 'successfully added post';
//todo added

//mongoexport --db sales --collection contacts --out contacts.json --journal





?>