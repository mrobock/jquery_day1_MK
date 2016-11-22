var objectCredz = {};
var i = 0;

//Set up JQuery to fully load once HTML document is ready
$(document).ready(function() {

//On button (#submit) click, do the following:
//set the variable results equal to the value of the checkUser + checkPass functions (for now true/false)
//set the results paragraph equal to the results variable (for now true/false)
  $("#submit").on("click", function() {
    checkCredz();
    if (i > 5) {
      $("#submit").off("click");
      $("#results").text("Stop trying loser!");
    }
    //$("#results").text(results);
  });
//Define function checkUser which will pull the input in the user text field and check it against a set of criteria.
  function checkCredz() {
    var answer = [];
    //define a closure function that creates the Object userCredz containing a username and password.
    function userCredz() {
      return {
        user: $("#user").val(),
        pass: $("#pass").val(),
      }
    }
    objectCredz = userCredz();

    //create an answer array to hold the reasons why the user sucks (i.e. username/password don't fit criteria)
    //var answer = []; - created a global variable above

    //check userCredz.user (username of Credz object) for .length <6. Push response to array
    if (objectCredz.user.length < 6) {
      answer.push("Your username is too short");
      $("#user").val("");
    }
    //check objectCredz.user to make sure it does not include $, #, or !. Push response to array
    if (objectCredz.user.includes("$") || objectCredz.user.includes("#") || objectCredz.user.includes("!")) {
      answer.push("You must include one of the symbols");
      $("#user").val("");
    }
    //check userCredz.pass (password of Credz object) for .length <6. Push response to array
    if (objectCredz.pass.length < 6) {
      answer.push("Your password is too short");
      $("#pass").val("");
    }
    //check userCredz.pass to make sure it includes at least one of the following: $, !, #. Push response to array.
    if (!objectCredz.pass.includes("&") && !objectCredz.pass.includes("#") && !objectCredz.pass.includes("$")) {
      answer.push("Your password must contain a special character... dillweed");
      $("#pass").val("");
    }
    //check length of answer array. If 0 admit defeat and tell user their credentials are valid.
    if (answer.length === 0) {
      $("#results").text("Your credentials have been approved!");
    } else {
      $("#results").text("");
      $("#results").prepend(answer.join("<br>"));
    }
    i++;
    //if answer array.length > 0, tell the user why they suck (i.e. what parts of their username/password don't pass muster)
  }

});
