$(document).ready(function() {
  var timeLeft = 30;
  var correctAnswers = 0;

  var $timer = $('#timer');
  // We need to hide wholePage once countdown is finished
  var $wholePage = $('#wholePage');
  // We need to show results once countdown is finished
  var $results = $('#results');

  var timerId = setInterval(countdown, 1000);

  // Initializing/starting the game!
  $timer.empty();
  $timer.text(timeLeft);
  $results.hide();
  $wholePage.show();

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      alert('Times up!');
      // TODO: call endGame() !
    } else {
      $timer.text(timeLeft);
      timeLeft--;
    }
  }

  function endGame () {
    // Query the DOM for .questions
    // Look for which input is selected using jQuery
    // consider using jQuery .each function: http://api.jquery.com/jquery.each/
    //  for example:
    /*
    $.each($('.questions'), function (index, value) {
      $(this).....
      // Find which input is selected
      // Determine if it is a correct answer
      // If it is correct, correctAnswers += 1
    });
    */
    // show the $results div
    // find #correct-answer and set it's text = correctAnswers
  }


  // TODO: Create a click handler for the submit button that calls "endGame"
});

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






