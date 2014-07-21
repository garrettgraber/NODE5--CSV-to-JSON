
var fs = require('fs');
var inputFileName = process.argv[2];
var outputFileName = process.argv[3];
var inputArray = fs.readFileSync(inputFileName, 'utf-8').split('\n');
var propArray = inputArray[0].split(',');
var saveArray = inputArray.slice(1);
var output = [];

for(var i=0; i < saveArray.length; i++) {
	var tempArray = saveArray[ i ].split(',');
	var jsonObject = {};
	tempArray.forEach(function(element, index) {		
		var currentProperty = propArray[ index ];
		jsonObject[ currentProperty ] = element;		
	});
	output.push(jsonObject);
}

var jsonOutput = JSON.stringify(output);
console.log(jsonOutput);
fs.writeFileSync(outputFileName, jsonOutput);