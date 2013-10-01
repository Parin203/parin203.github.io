<?php
#mongoexport --db sales --collection contacts --out contacts.json --journal
$output = array();
$ret = null;
exec("mongoexport --db Todo --collection todo --out todo_backup_database.json", $output, $ret);
var_dump($output, $ret);
?>