var fs = require('fs')

fs.readFile('function1.js','utf8',function(arr,data){
	console.log(data)
})
