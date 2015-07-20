var express = require('express'),
	app = module.exports = express(),
	users = require('./db');

	console.log('Users: ' + users);
	console.log('Users var data type: ' + typeof users);

//so either you can deal with different types of formatting
//for expected response in index.js
app.get('/', function(req, res) {
	res.format({
		html: html,
		text: text,
		json: json
	});

	function html() {
		function constructUl() {
			var text = constructText();
			console.log(text);
			return '<ul>' + users.map(text);
		}

		res.send(constructUl().join());
	}

	function text() {
		res.send(users.map(constructText).join(''));
	}

	function json() {
		res.json(users);
	}

	function constructText(user) {
		console.
		return ' - ' + user.name + '\n';
	}
});

// or you could write a tiny middleware like
// this to add a layer of abstraction 
// and make things a bit more declaritive

// function format(path) {
// 	var obj = require(path);

// 	return function(req, res) {
// 		res.format(obj);
// 	};
// }

// app.get('/users', format('./users'));

if(!module.parent) {
	app.listen(3000);
	console.log('Express started on port 3000');
}