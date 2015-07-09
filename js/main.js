console.log('activate framework!');

/*setting up questions and answers for loops*/

var triviaQ = new Array(11);
var answerKey = new Array(10);

var answerSheet1 = [];
var answerSheet2 = [];

/*starting score for players*/

var player1Score = 0;
var player2Score = 0;

/*Q & A Array*/

triviaQ[0] = "Righty is to tighty, as lefty is to ______.<br>A) Loosey B) Choosey C) Moosey";
triviaQ[1] = "If your computer doesn't turn on, what do you check first?<br>A) Restart B) Power C) Wifi";
triviaQ[2] = "The tool that lifts your car is called?<br>A) Kicker B) Chalk C) Jack";
triviaQ[3] = "The grass is the color_____?<br>A) Green B) Brown C) Yellow";
triviaQ[4] = "The sky is the color____?<br>A) Grey B) Blue C) Pink";
triviaQ[5] = "The largest organ the human body possesses is?<br>A) Lungs B) Tounge C) Skin";
triviaQ[6] = "What is the fastest organ in the human body?<br>A) Eyes B) Heart C) Bladder";
triviaQ[7] = "Do they have a 4th of July in Great Britain?<br>A) No  B) Yes C) Maybe";
triviaQ[8] = "How many stars are on the American flag?<br>A) 48 B) 49 C) 50";
triviaQ[9] = "Which is the biggest island of Hawaii?<br>A) Big Island B) Kawaii C) Maui";
triviaQ[10] = "Good game!";

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

var aBtn = document.getElementById("a");
var bBtn = document.getElementById("b");
var cBtn = document.getElementById("c");
var dBtn = document.getElementById("d");
var eBtn = document.getElementById("e");
var fBtn = document.getElementById("f");

var mainL = document.getElementById("mainLine");
mainL.innerHTML = triviaQ[0];

/*Gotta get a winner*/

var winner = function(){
  if(player1Score == player2Score){
    return "Tie game!";
  }else if(player1Score > player2Score){
    return "Player 1 wins!";
  }else{
    return "Player 2 wins!";
  }
}

/*reset color*/

var continueBtn = document.getElementById("continue");

var resetColor = function(){
  mainL.style.color = "black";
}

/*Make continueBtn diplay question 1*/

var count = 0;
continueBtn.addEventListener("click", function(){

  compSheet1();
  compSheet2();

  count++;
  mainL.innerHTML = triviaQ[count];
  scoreB1.value = player1Score;
  scoreB2.value = player2Score;
  if (count > 9){
    var c = confirm(winner() + " Wanna play again?");
    if (c === true){
    count = -1;
    player1Score = -1;
    player2Score = -1;
    answerSheet1 = [];
    answerSheet2 = [];
    mainL.innerHTML = "Press continue to play";
    mainL.style.color = "red";
    return;
    } else if (c === false){
      player1Score = -1;
      player2Score = -1;
      mainL.innerHTML = "GoodBye :)";
      txt = "Goodbye :)";
    }
  }
  return count, resetColor();
});

/*Tie DOM in buttons*/

aBtn.addEventListener("click", function(){
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
bBtn.addEventListener("click", function(){
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
cBtn.addEventListener("click", function(){
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
dBtn.addEventListener("click", function(){
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});
eBtn.addEventListener("click", function(){
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});
fBtn.addEventListener("click", function(){
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});

/*console.log(player1Score);*/

var scoreB1 = document.getElementById("score1");
scoreB1.value = player1Score;

/*Compare answers*/

var compSheet1 = function(){
  if(answerSheet1.pop(count)===answerKey[count]){
    player1Score++;
  }
};

/*console.log(player2Score);*/
var scoreB2 = document.getElementById("score2");
scoreB2.value = player2Score;

var compSheet2 = function(){
  if(answerSheet2.pop(count)===answerKey[count]){
    player2Score++;
  }
};
