
var canvas; 
var context;
var rink_img = new Image();
function makeCanvas(){
	canvas = document.getElementById('rink'); 
	context = canvas.getContext("2d");
	rink_img.src = "images/rink2.png";
	rink_img.onload = function(){
		//context.clearRect(0,0,canvas.width,canvas.height);
		context.drawImage(rink_img,0,0);
	}
}
window.onload = makeCanvas;