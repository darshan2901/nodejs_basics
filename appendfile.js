var fs = require('fs')

fs.appendFile('function1.js','console.log("done")',function(err){
	console.log("data saved")
})
