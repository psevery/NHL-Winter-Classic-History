var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql');

var app = express();
app.use(express.static('public'));

var database = mysql.createConnection({
  host     : 'localhost',
  user     : '',
  port     : '',
  password : '',
  database : 'hockey'
});


app.post('/listGames', function(req, res){
  database.query("select name, year from games order by year", function(err, rows, fields){
    res.send(rows);
  });
});
 
 

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

