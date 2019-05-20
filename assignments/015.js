// create secret number
var secretNumber = 7;
// ask for number
var guessString = prompt("Guess a number!");
var guessNum = Number(guessString);
// check number against secret number
if (guessNum === secretNumber) {
  alert("Your guess is correct!");
}
