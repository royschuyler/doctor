var express = require('express');
var app = express();
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('Tester3');

app.set('view engine', 'jade');
app.use(express.static('www'));


//--------------------------------------------------------------------------------------------
app.get('/test', function(req, res) {
  res.render('test')
});

//--------------------------------------------------------------------------------------------
app.get('/test', function(req, res) {
  res.render('test')
});

//-----------------------------------------------------------------------------------------------

app.listen(3000);
