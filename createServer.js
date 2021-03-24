	var http = require('http')

	http.createServer(function(req,res){

		// res.writeHead(200,{'content-type' : 'html/css'})
		res.write("Welcome to the our Portal!!")
		res.end()

	}).listen(9000)
