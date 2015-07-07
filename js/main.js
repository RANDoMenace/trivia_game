
console.log('activate framework!');

/*setting up questions and answers for loops*/

var triviaQ = new Array(10);
var answerKey = new Array(10);

/*grabbing answers from players*/
var player1Score = 0;
var player2Score = 0;
var winner;
var gameOn = false;// true in event

triviaQ[0] = "Finish this sentence: Righty tighty, lefty _______.";
triviaQ[1] = "If your computer doesn't turn on right away, the first thing to check is...?";
triviaQ[2] = "The tool that lifts your car so you can change its tire is called?";
triviaQ[3] = "The grass is ______?";
triviaQ[4] = "The sky is ____?";
triviaQ[5] = "The largest organ the human body possesses is?";
triviaQ[6] = "What is the fastest organ in the human body?";
triviaQ[7] = "Do they have a 4th of July in Great Britain?";
triviaQ[8] = "How many stars are on the American flag?";
triviaQ[9] = "Which is the biggest island of Hawaii?";

answerKey[0] = "A";
answerKey[1] = "B";
answerKey[2] = "C";
answerKey[3] = "A";
answerKey[4] = "B";
answerKey[5] = "C";
answerKey[6] = "A";
answerKey[7] = "B";
answerKey[8] = "C";
answerKey[9] = "A";



/*----DOM connections-----*/
var scoreB1 = document.getElementById("score1")
scoreB1.innerHTML = player1Score;

var scoreB2 = document.getElementById("score2")
scoreB2.innerHTML = player2Score;

var aBtn = document.getElementById("a");
var bBtn = document.getElementById("b");
var cBtn = document.getElementById("c");
var dBtn = document.getElementById("d");
var eBtn = document.getElementById("e");
var fBtn = document.getElementById("f");

var mainL = document.getElementById("mainLine");

mainL.innerHTML = triviaQ[0];


var continueBtn = document.getElementById("continue");

/*Make continueBtn diplay question 1*/
var count = 1;

continueBtn.addEventListener("click", function(){
  count++;
  mainL.innerHTML = triviaQ[count];
  if (count >= 9){
    var c = confirm("Wanna play again?");
    if (c == true){
    count = 0;
    }
  }
  return count;
});

aBtn.addEventListener("click", function(){
  console.log(aBtn);
});

bBtn.addEventListener("click", function(){
  console.log(bBtn);
});

cBtn.addEventListener("click", function(){
  console.log(cBtn);
});

dBtn.addEventListener("click", function(){
  console.log(dBtn);
});

eBtn.addEventListener("click", function(){
  console.log(eBtn);
});

fBtn.addEventListener("click", function(){
  console.log(fBtn);
});









