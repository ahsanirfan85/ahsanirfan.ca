// create secret number
var secretNumber = 7;
// ask for number
var guess = prompt("Guess a number!");

// check number against secret number
if (guess < secret) {
  alert("You guessed too low!");
} else if (guess === secretNumber) {
  alert("Your guess is correct!");
} else {
  alert("You guessed too high!");
}
