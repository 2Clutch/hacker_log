const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response) {
	return response.redirect('/form');
});

app.get('/form', function(request, response) {
	return response.render('form');
});

app.listen(8080, function() {
	console.log('Hello World');
});