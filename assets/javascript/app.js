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

//var triviaQuestions = [{
//    question: 'Which basketball team won the 2016 NBA Championship?',
//    choices: ['Warriors', 'Cavaliers', 'Spurs', 'Pacers',]
   // answer: 1

//},{
//    question: 'Which of these Breaking Bad Characters got there own spinoff TV show after the series ended?',
//    choices: ['Jesse Pinkman', 'Gus Fring', 'Saul Goodman', 'Hank Schrader',]
   // answer: 2
//},{
//    question: 'Which of these fish are known for being the fastest swimming?',
//    choices: ['Shark', 'Swordfish', 'Marlin', 'Sailfish',]
   // answer: 3
//}],






