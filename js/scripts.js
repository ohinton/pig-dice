//business logic
var player1 = new Player(true);
var player2 = new Player(false);
// var tempScore = 0;
// var totalScore1 = 0;
// var totalScore2 = 0;
// var roll = 0;

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
}

// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  this.changeturn();
} else {
  this.tempscore += this.roll;
}
}

// hold
Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  this.changeturn();
}

// changing turn
Player.prototype.changeturn = function () {
  if (this.turn === true) {
    this.turn = false;
  } else {
    this.turn = true;
  }
}
// check for 100
// var runningScore1 = function () {
//   totalScore1 += tempScore;
//
//   if (totalScore1 >= 100) {
//     alert("You win!")
//   }
//   return totalScore1;
// }
//
// var runningScore2 = function () {
//   totalScore2 += tempScore;
//
//   if (totalScore2 >= 100) {
//     alert("You win!")
//   }
//
//   return totalScore2;
// }

// User Interface
$(document).ready(function() {
  $("button#start").click(function(event){
    $(".player-console").show();
    $(".start-menu").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);

    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);
  });

  $("button#new-game").click(function(event){
    $(".player-console").hide();
    $(".start-menu").show();
  });

  $("button#player1-roll").click(function(event){
    player1.roll = throwdice();
    $("#die-roll-1").text(player1.roll);
    player1.rollone();
    $("#round-total-1").text(player1.tempscore);
  });

  $("button#player2-roll").click(function(event){
    player2.roll = throwdice();
    $("#die-roll-2").text(player2.roll);
    player2.rollone();
    $("#round-total-2").text(player2.tempscore);
  });

  $("button#player1-hold").click(function(event){
    player1.hold();
    $("#total-score-1").text(player1.totalscore);
    $("#round-total-1").empty();
    $("#die-roll-1").empty();
  });

  $("button#player2-hold").click(function(event){
    player2.hold();
    $("#total-score-2").text(player2.totalscore);
    $("#round-total-2").empty();
    $("#die-roll-2").empty();
  });

});
