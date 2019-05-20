// create secret number
var secretNumber = Math.round(Math.random() * 10);

// ask for number
var guessString = prompt("Guess a number!");
var guessNum = Number(guessString);
alert("You guessed: " + guessNum);
// // check number against secret number
// if (guessNum === secretNumber) {
//   alert("Your guess is correct!");
// }
