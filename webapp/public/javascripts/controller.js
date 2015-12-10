var games = new Array();
var theGame;
var gameName;
var year;
var home;
var away; 

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
	console.log(gameName + '!!' + year.year);
}
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



