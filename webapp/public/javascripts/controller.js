var games = new Array();

$.post("/listGames", function(data, status){
	for (var i = 0; i < data.length; i++) {
		games[i] = data[i].name + ' ' + data[i].year ;
	}
	listGames();
});

function listGames(){
	var selectGame = document.getElementById('game');
	for (var i = 0; i < games.length; ++i) {
		console.log(games);
	    selectGame[selectGame.length] = new Option(games[i], games[i]);
	    // var opt = games[i];
	    // var el = document.createElement("option");
	    // el.textContent = opt;
	    // el.value = opt;
	    // document.getElementById('game').appendChild(el);
	}
}
