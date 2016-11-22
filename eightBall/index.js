$(document).ready(function() {

  $("#submit").on("click",function() {
    //set answer paragraph equal to random value from array
    var heyYo = eightBall();
    $("#answer").text(heyYo);
    //clear question box
    $("#question").val("");
  });

})


// FUNCTIONS

function eightBall(){
  var answers = ["Have you tried looking in the mirror?", "Because you're ugly.", "Because your face.", "Because your mother doesn't love you.", "Because Pierce says so, idiot"];

 return answers[Math.floor(Math.random()* answers.length)];
  //document.getElementById("inputField").value = ""
}
