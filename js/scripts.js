//business logic

var tempScore = 0;
var totalScore = 0;
var roll = 0;

// function player(name, score) {
//   this.playerName = name;
//   this.gameScore = score;
// }

// PlayerInfo.prototype.roundScore = function () {
//   roundTotal += this.player1DiceRoll
// }
//
// PlayerInfo.prototype.totalScore = function () {
//   totalScore += this.playerRoundTotal
// }


var throwdice = function () {
  roll = Math.floor(6*Math.random()) + 1;
  if (roll === 1) {
    tempScore = 0;
  } else {
    tempScore += roll;
  }
  return roll;
}

var runningScore = function () {
  totalScore += tempScore;
  return totalScore;
}

$(document).ready(function() {
  $("button#start").click(function(event){
    $(".player-console").show();
    $(".start-menu").hide();
  })

  $("button#new-game").click(function(event){
    $(".player-console").hide();
    $(".start-menu").show();
  })





  $("button#player1-roll").click(function(event){
    event.preventDefault();

    var result = throwdice();

    $("#die-roll-1").text(result);
    $("#round-total-1").text(tempScore);
  });

  $("button#player1-hold").click(function(event){
    $("#total-score-1").text(runningScore);
    tempScore = 0;
    $("#round-total-1").empty();
    $("#die-roll-1").empty();

});

  $("button#player2-roll").click(function(event){
    event.preventDefault();

    var result = throwdice();

    $("#die-roll-2").text(result);
    $("#round-total-2").text(tempScore);
  });

  $("button#player2-hold").click(function(event){
    $("#total-score-2").text(runningScore);
    tempScore = 0;
    $("#round-total-2").empty();
    $("#die-roll-2").empty();

  });

});
