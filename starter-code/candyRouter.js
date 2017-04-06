var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candies = [
	{"id":1,"name":"Chewing Gum","color":"Red"},
	{"id":2,"name":"Pez","color":"Green"},
	{"id":3,"name":"Marshmallow","color":"Pink"},
	{"id":4,"name":"Candy Stick","color":"Blue"}
];

var stringCandy = JSON.stringify(candies);
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	// What would go here? 
	// Hint: we want all candies in JSON format
	res.json(candies);
	console.log("index");

});

// Fill out the rest of the routes here

router.get('/:id', function(req,res) {
	var id = req.params.id;
	res.json(candies[id-1]);
	console.log("show");
});

router.post('/', function(req,res) {
	candies.push(req.body);
	console.log(req.body);
	res.end();
	console.log("create");
});

router.put('/:id', function(req,res) {
	var id = req.params.id;
	candies.forEach(function(el, index){
		console.log(el);
		console.log(el.name);
		console.log(el.color);
		if(el.id == id){
			candies[index]= req.body;
			console.log(el);
			console.log(index);
		}
	});
	console.log("update");
	console.log(req.body);
	res.end();

});

router.delete('/:id', function(req,res) {
	var id = req.params.id;
	candies.forEach(function(el, index){
		if(el.id == id){
			candies.splice(index);
			console.log(el);
			console.log(index);
		}
	});
	console.log("delete");
	res.end();
});

module.exports = router;