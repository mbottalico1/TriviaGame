$(document).ready(function() {


var timeLeft = 30;
var $elem = $('#timer');

var timerId = setInterval(countdown, 1000);

  $elem.empty();
  $elem.text(timeLeft);

function countdown() {
 if (timeLeft == 0) {
    clearTimeout(timerId);
    alert('Times up!');

} else {
       $elem.text(timeLeft);
       timeLeft--;
     }
   }
})


