var express = require('express');
var bodyParser = require('body-parser')
var mysql = require('mysql');
var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

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
app.post('/gameInfo', function(req, res){
  console.log('select home, away, homescore, awayscore from games where year='+JSON.stringify(req.body.year));
  database.query('select home, away, homescore, awayscore from games where year='+JSON.stringify(req.body.year), function(err, rows, fields){
    console.log(rows);
    res.send(rows);
  });
});

app.post('/homePlayers', function(req, res){
  console.log('select * from players where team in (select home from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from players where team in (select home from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/awayPlayers', function(req, res){
  console.log('select * from players where team in (select away from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from players where team in (select away from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/homeGoalie', function(req, res){
  console.log('select * from goalies where team in (select home from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from goalies where team in (select home from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/awayGoalie', function(req, res){
  console.log('select * from goalies where team in (select away from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from goalies where team in (select away from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/homeCoach', function(req, res){
  console.log('select * from coaches where team in (select home from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from coaches where team in (select home from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/awayCoach', function(req, res){
  console.log('select * from coaches where team in (select away from games where year='+JSON.stringify(req.body.year)+')');
  database.query('select * from coaches where team in (select away from games where year='+JSON.stringify(req.body.year)+')', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/homePenalties', function(req, res){
  console.log('select * from penalties where team in (select home from games where year='+JSON.stringify(req.body.year)+' order by period)');
  database.query('select * from penalties where team in (select home from games where year='+JSON.stringify(req.body.year)+') order by period', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/awayPenalties', function(req, res){
  console.log('select * from penalties where team in (select away from games where year='+JSON.stringify(req.body.year)+' order by period)');
  database.query('select * from penalties where team in (select away from games where year='+JSON.stringify(req.body.year)+') order by period', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/homeGoals', function(req, res){
  console.log('select * from goals where team in (select home from games where year='+JSON.stringify(req.body.year)+' order by period)');
  database.query('select * from goals where team in (select home from games where year='+JSON.stringify(req.body.year)+') order by period', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/awayGoals', function(req, res){
  console.log('select * from goals where team in (select away from games where year='+JSON.stringify(req.body.year)+' order by period)');
  database.query('select * from goals where team in (select away from games where year='+JSON.stringify(req.body.year)+') order by period', function(err, rows, fields){
    res.send(rows);
  });
});

app.post('/refs', function(req, res){
  console.log('select * from refs where gamename in (select name from games where year='+JSON.stringify(req.body.year));
  database.query('select * from refs where gamename in (select name from games where year='+JSON.stringify(req.body.year) + ")", function(err, rows, fields){
    res.send(rows);
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

