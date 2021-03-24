var fs = require('fs')

fs.unlink('function2.js',function(err){
	console.log("data deleted")
})
