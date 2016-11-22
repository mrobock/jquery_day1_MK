$(document).ready(function() {
  $("#submit").on("click", function(){
    startGame();

  });
});

var answer = Math.floor(Math.random() * 100);
var i = 7;

function startGame() {
  if (i > 0) {
    guess = parseInt(document.getElementById("userGuess").value);

    if (i <= 2) {
      $("#feedback").addClass("red")
    }

    if (isNaN(parseInt(guess))) {
      $("#feedback").text("Please enter a number asshole");
    }
    else if (guess < answer) {
      $("#feedback").text("too low idiot");
    }
    else if (guess > answer) {
      $("#feedback").text("too high assmunch");
    }
    else if (guess === answer) {
      $("#feedback").text("HUZZAH");
    }
    i--
    $("#feedback").prepend(guess + " was ");
  }
  else {
    $("#feedback").text("You are an idiot! Stop guessing already");
    $("#userGuess").hide();
    $("#submit").hide();
  }
}
