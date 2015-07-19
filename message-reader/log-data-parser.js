var fs = require('fs');


// read the contents of the file into memory
fs.readFile('example_log.txt', logDataParser);

function logDataParser(err, buffer) {

	//if an error occurred throwing it will display the exception and end our app
	if(err) {
		throw err;
	}

	// log data is a buffer, convert to string.
	var text = logData.toString();

	var results = {};

	// break up the file into lines
	var lines = text.split('\n');

	lines.forEach(function(line) {
		var parts = line.split(' ');
		var letter = parts[1];
		var count = parseInt(parts[2]);

		if(!results[letter]) {
			results[letter] = 0;
		}

		results += parseInt(count);
	});

	console.log(results);
}