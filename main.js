var user;
var computer;
var result;
var options = ['rock', 'paper', 'scissors'];
var userLabel = document.getElementById('user');
var computerLabel = document.getElementById('computer');
var winnerLabel = document.getElementById('winner');
var rockStats = document.getElementById('rockStats');
var paperStats = document.getElementById('paperStats');
var scissorStats = document.getElementById('scissorStats');
var stats = {
  rock: 0,
  paper: 0,
  scissors: 0,
  rockWins: 0,
  paperWins: 0,
  scissorsWins: 0
}

function computerChoice() {
  var index = Math.floor(Math.random() * options.length)
  return options[index];
}

function compare() {
  userIndex = options.indexOf(user);
  computerIndex = options.indexOf(computer);

  if (userIndex === computerIndex) {
    result = 'Tie';
  } else if (userIndex === options.length - 1 && computerIndex === 0 ) {
    result = 'Lose';
  } else if (computerIndex === options.length - 1 && userIndex === 0 ) {
    stats[user + 'Wins']++
    result = 'Win';
  } else if (userIndex > computerIndex) {
    stats[user + 'Wins']++
    result = 'Win';
  } else {
    result = 'Lose';
  }

function printResults() {
  userLabel.innerHTML = 'User: ' + user;
  computerLabel.innerHTML = 'Computer: ' + computer;
  winnerLabel.innerHTML = 'Result: ' + result;
  var klass = '';
  if (result === 'Win') {
    klass = 'green'
  } else if (result == 'Lose') {
    klass = 'red'
  }
  winnerLabel.className = klass;
}

function startGame(e) {
  user = e.target.id;
  stats[user]++
  computer = computerChoice();
  compare();
  printResults();
  calcTotals();
}

function calcTotals() {
  rockStats.innerHTML = 'Rock: ' + stats.rockWins + "/" + stats.rock;
  paperStats.innerHTML = 'Paper: ' + stats.paperWins + "/" + stats.paper;
  scissorStats.innerHTML = 'Scissors: ' + stats.scissorsWins + "/" + stats.scissors;
}

var choices = document.getElementsByClassName('choice');
for (var i in choices) {
  try {
    choices[i].addEventListener('click', startGame);
  } catch(err) {
    //First Load
  }
}
