var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

var port = process.env.PORT || 8080;

var router = express.Router();

router.get('/', function(req,res){
	res.json({message:'hooray! Welcome to our first API!'});
});

router.get('/hello', function(req,res){
	res.json({message:"Hello World"});
})
router.get('/goodbye/:name', function(req,res){
	res.json({message:"Goodbye "+req.params.name});
})

router.post('/sum', function(req,res){
	var sum = req.body.num1 + req.body.num2
	res.json({message:"The answer is "+sum})
})

app.use('/api', router);
app.listen(port);
console.log('Magic happens in port '+port);
