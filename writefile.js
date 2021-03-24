var fs = require('fs')

fs.writeFile('function2.js','console.log("done")',function(err){
	console.log("data saved")
})
