// function that returns 'true' or 'false' depending on whether or not a number is even

function isEven(input) {
  if (input % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEven(prompt("Pick a number."));
