// create secret number
// var secretNumber = Math.round(Math.random() * 10);
var secretNumber = 5;

// ask for number
var guessString = prompt("Guess a number between 0 & 10!");
var guessNum = Number(guessString);

// // check number against secret number
if (guessNum <= secretNumber) {
  alert("Your guess is too low");
} else if (guessNum === secretNumber) {
  alert("You guessed correctly!");
} else {
  alert("Your guess is too high!");
}
