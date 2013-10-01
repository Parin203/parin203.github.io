<?php
class MyMongo{
		public $connection ;
		public $database ;
		public $collection;
		public $cursor;

		public function __construct ($database,$collection){
			$this->connection =  new Mongo();
			$this->database = $this->connection->$database;
			$this->collection = $this->database->$collection;
		}
		public function close(){
			$this->connection->close();
		}
		public function save($doc){
		$this->collection-> save($doc);	
		}

		public function find_all(){
			$this->cursor = $this->collection->find();
			$array = array();
			foreach ( $this->cursor as $value){
			    array_push($array, $value );
				}
			return $array;
		}

		public function find($query,$fields){
		return $this->collection->find($query,$fields);
		}

		public function update($query,$data){
		$this->collection->update($query,$data);
		}

		public function remove($query){
		$this->collection->remove($query);
		}
	}	

// $array = $mongo->find_all();
// print_r($array);
// echo $mongo->collection->count();

?>