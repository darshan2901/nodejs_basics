const express = require('express');

const app = express();

// get, post, put, delete

app.get('/',function(req,res){
	res.send('Hello Guys')
});

app.get('/home',function(req,res){
	res.send('Welcome to the website')
});

app.get('/home/:id',function(req,res){
	const id = req.params.id
	res.send('Hey Darshan ' + id)
});

app.listen(9000,function(req,res){
	console.log('Running...')
});
