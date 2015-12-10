var games = new Array();
var theGame;
var gameName;
var title; 

function getTitle(){
	title = document.getElementById('title');
}

$.post("/listGames", function(data, status){
	theGame = data;
	for (var i = 0; i < data.length; i++) {
		games[i] = data[i].name + ' ' + data[i].year ;
	}
	listGames();
});

function listGames(){
	var selectGame = document.getElementById('game');
	for (var i = 0; i < games.length; ++i) {
	    selectGame[selectGame.length] = new Option(games[i], games[i]);
	}
}
function getSelectedGame(){
	var selected = document.getElementById('game').value;
	var temp = selected.split(" "); 
	gameName = temp[0] + ' ' +temp[1]; 
	year = {year: temp[2]}; 
	$.ajax({
  		type: "POST",
 		url: '/gameInfo',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){
  			var home = data[0].home;
  			var away = data[0].away;
  			var homescore = data[0].homescore;
  			var awayscore = data[0].awayscore;
  			console.log(home + away + homescore + awayscore);
  			title.innerHTML = home + ": " + homescore + "  " + away + ": " + awayscore; 
  		}
	});
}
//PLAYERS
function getHomePlayers(){
	$.ajax({
  		type: "POST",
 		url: '/homePlayers',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
function getAwayPlayers(){
	$.ajax({
  		type: "POST",
 		url: '/awayPlayers',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
//GOALIES
function getHomeGoalie(){
	$.ajax({
  		type: "POST",
 		url: '/homeGoalie',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
function getAwayGoalie(){
	$.ajax({
  		type: "POST",
 		url: '/awayGoalie',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
//COACHES
function getHomeCoach(){
	$.ajax({
  		type: "POST",
 		url: '/homeCoach',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
function getAwayCoach(){
	$.ajax({
  		type: "POST",
 		url: '/awayCoach',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
//PENALTIES
function getHomePenalties(){
	$.ajax({
  		type: "POST",
 		url: '/homePenalties',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
function getAwayPenalties(){
	$.ajax({
  		type: "POST",
 		url: '/awayPenalties',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}

function getHomeGoals(){
	$.ajax({
  		type: "POST",
 		url: '/homeGoals',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}
function getAwayGoals(){
	$.ajax({
  		type: "POST",
 		url: '/awayGoals',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}

function getRefs(){
	$.ajax({
  		type: "POST",
 		url: '/refs',
 		contentType: 'application/json',
  		data: JSON.stringify(year),
  		success: function(data,status){populateTable(data)}
	});
}



