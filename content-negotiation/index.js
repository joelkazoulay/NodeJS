var express = require('express'),
	app = module.exports = express(),
	users = require('./db');

//so either you can deal with different types of formatting
//for expected response in index.js
app.get('/', function(req, res) {
	res.format({
		html: html,
		text: text,
		json: json
	});
});

function html() {
	res.send(constructUl().join());

	function constructUl() {
		return '<ul>' + users.map(constructText);
	}
}

function text() {
	res.send(users.map(constructText).join(''));
}

function json() {
	res.json(users);
}

function constructText(user) {
	return ' - ' + user.name + '\n';
}

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
	app.listen(3900);
	console.log('Express started on port 3000');
}