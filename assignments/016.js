// create secret number
var secretNumber = Math.round(Math.random() * 10);
console.log(secretNumber);
// var secretNumber = 5;

// ask for number
var guessString = prompt("Guess a number between 0 & 10!");
var guessNum = Number(guessString);

while (guessNum !== secretNumber) {
  // // check number against secret number
  if (guessNum < secretNumber) {
    guessNum = prompt("Your guess is too low! Guess again!");
  } else if (guessNum > secretNumber) {
    guessNum = prompt("Your guess is too high! Guess again!");
  }
}

alert("You guess correctly!");
