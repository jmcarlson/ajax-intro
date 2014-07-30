var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var nbrTotal = 0;

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', indexController.index);

app.get('/numbers', function(req, res) {
	res.send([
		Math.random(),
		Math.random(),
		Math.random()
	]);
})

app.post('/total', function(req, res) {
	nbrTotal += +req.body.n;
	console.log('Nbr entered: ', req.body.n);
	console.log('Total: ', nbrTotal);
	// res.status(200).send(nbrTotal);
	res.send(200,{x:nbrTotal});
})

var server = app.listen(3000, function() {
	console.log('Express server listening on port ' + server.address().port);
});
