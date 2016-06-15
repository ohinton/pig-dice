//business logic
// var diceRoll = 0;
// var roundTotal = 0;
// var totalScore = 0;
//
// function PlayerInfo (name, diceRoll, roundTotal, totalScore) {
//   this.playerName = name;
//   this.playerDiceRoll = diceRoll;
//   this.playerRoundTotal = roundTotal;
//   this.playerTotalScore = totalScore;
// }

// PlayerInfo.prototype.roundScore = function () {
//   roundTotal += this.player1DiceRoll
// }
//
// PlayerInfo.prototype.totalScore = function () {
//   totalScore += this.playerRoundTotal
// }
//user Logic
//
// var dieRoll = function () {
//   var dieCount = Math.floor( Math.random() * 6) + 1;
//   return dieCount;
// }

debugger;
$(document).ready(function() {
  $("button#player1-roll").submit(function(event){
    event.preventDefault();

    var rollDice = throwdice();

    var throwdice = function () {
      var roll = Math.floor( Math.random() * 6) + 1;
      return roll;
    }

    $("#die-roll-1").text(rollDice);
});
});
