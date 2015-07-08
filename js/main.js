
console.log('activate framework!');

/*setting up questions and answers for loops*/

var triviaQ = new Array(10);
var answerKey = new Array(10);

var answerSheet1 = [];
var answerSheet2 = [];

/*grabbing answers from players*/
var player1Score = 0;
var player2Score = 0;
var winner;
var gameOn = false;// true in event

triviaQ[0] = "Finish this sentence: Righty tighty, lefty _______.<br>A) Loosey B) Choosey C) Moosey";
triviaQ[1] = "If your computer doesn't turn on, what do you check first?<br>A) Restart B) Power C) Wifi";
triviaQ[2] = "The tool that lifts your car is called?<br>A) Kicker B) Chalk C) Jack";
triviaQ[3] = "The grass is ______?<br>A) Green B) Brown C) Yellow";
triviaQ[4] = "The sky is ____?<br>A) Grey B) Blue C) Pink";
triviaQ[5] = "The largest organ the human body possesses is?<br>A) Lungs B) Tounge C) Skin";
triviaQ[6] = "What is the fastest organ in the human body?<br>A) Eyes B) Heart C) Bladder";
triviaQ[7] = "Do they have a 4th of July in Great Britain?<br>A) Yes B) No C) Thier own kind";
triviaQ[8] = "How many stars are on the American flag?<br>A) 48 B) 50 C) 51";
triviaQ[9] = "Which is the biggest island of Hawaii?<br>A) Big Island B) Kawaii C) Maui";

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
var scoreB1 = document.getElementById("score1");
scoreB1.value = player1Score;

var scoreB2 = document.getElementById("score2");
scoreB2.value = player2Score;

var aBtn = document.getElementById("a");
var bBtn = document.getElementById("b");
var cBtn = document.getElementById("c");
var dBtn = document.getElementById("d");
var eBtn = document.getElementById("e");
var fBtn = document.getElementById("f");

var mainL = document.getElementById("mainLine");

var player1 = function(){

}

var getScore = function(player1, player2){
/*console.log(count);*/
  if(count == 0){
    console.log(aBtn);
  }
}

mainL.innerHTML = triviaQ[0];
/*console.log(gameOn);*/
var continueBtn = document.getElementById("continue");

/*Make continueBtn diplay question 1*/
var count = 0;
continueBtn.addEventListener("click", function(){
  if (gameOn==false){
    gameOn = true;
  }
  count++;
  console.log(player1());
  mainL.innerHTML = triviaQ[count];
  if (count >= 9){
    var c = confirm("Wanna play again?");
    if (c == true){
    count = -1;
    } else if (c == false){
      txt = "Goodbye :)";
      gameOn = false;
      return gameOn;
    }
  }
  return count;
});

aBtn.addEventListener("click", function(){
  console.log(aBtn);
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
bBtn.addEventListener("click", function(){
  console.log(bBtn);
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
cBtn.addEventListener("click", function(){
  console.log(cBtn);
  answerSheet1.push(this.innerHTML);
  console.log(answerSheet1);
});
dBtn.addEventListener("click", function(){
  console.log(dBtn);
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});
eBtn.addEventListener("click", function(){
  console.log(eBtn);
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});
fBtn.addEventListener("click", function(){
  console.log(fBtn);
  answerSheet2.push(this.innerHTML);
  console.log(answerSheet2);
});

var compSheet1 = function(){
  if (count == 0){
    if (answerSheet1[0] === answerKey[0]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 1) {
    if (answerSheet1[1] === answerKey[1]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 2) {
    if (answerSheet1[2] === answerKey[2]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 3) {
    if (answerSheet1[3] === answerKey[3]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 4) {
    if (answerSheet1[4] === answerKey[4]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 5) {
    if (answerSheet1[5] === answerKey[5]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 6) {
    if (answerSheet1[6] === answerKey[6]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 7) {
    if (answerSheet1[7] === answerKey[7]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 8) {
    if (answerSheet1[8] === answerKey[8]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  if (count == 9) {
    if (answerSheet1[9] === answerKey[9]){
      player1Score = player1Score + 1;
      console.log(player1Score);
    } else {}
  }
  console.log(player1Score);
};








