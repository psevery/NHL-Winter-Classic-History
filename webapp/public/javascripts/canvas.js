
var canvas; 
var context;
var rink_img = new Image();
function makeCanvas(){
	canvas = document.getElementById('rink'); 
	context = canvas.getContext("2d");
	rink_img.src = "images/rink.png";
	rink_img.onload = function(){
		//context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(rink_img,0,0);
	}
	canvas.addEventListener('click',function(event){
		var x = event.pageX- canvas.offsetLeft, y = event.pageY-canvas.offsetTop; 
		console.log(x + " "+ y);
		if ((x >= 325 && x<= 360)&&(y>20 && y<=50)){
			//home penalties
		}
		else if ((x > 360 && x<= 435)&&(y>20 && y<=50)){
			//refs
		}
		else if ((x > 435 && x<= 465)&&(y>20 && y<=50)){
			//away penalties
		}
		else if ((x > 35 && x<= 80)&&(y>220 && y<=275)){
			//home goalie
		}
		else if ((x > 715 && x<= 750)&&(y>220 && y<=275)){
			//away goalie
		}
		else if ((x > 260 && x<= 385)&&(y>445 && y<=475)){
			//home players
			getHomePlayers();
		}
		else if ((x > 415 && x<= 535)&&(y>445 && y<=475)){
			//away players
			getAwayPlayers();
		}
		else if ((x > 265 && x<= 385)&&(y>495 && y<=500)){
			//home coach
		}
		else if ((x > 415 && x<= 535)&&(y>495 && y<=500)){
			//away coach
		}
		else if (x<=400){
			//away goals
		}
		else{
			//home goals
		}
		getTable();

	});
}


window.onload = makeCanvas;

