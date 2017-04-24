$(document).ready(function() {

var count= 30;
var counter= setInterval(timer, 1000);
var choice[];

 var timer = function() {
	count = count-1;
	if (count <= 0) {
		clearInterval(counter);
		return;
	}
	document.getElementById('timer').innerHTML='Time ' + count;
}

})






