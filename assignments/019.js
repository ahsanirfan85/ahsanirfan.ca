// function that returns 'true' or 'false' depending on whether or not a number is even

function isEven(input) {
  if (input % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// alert(isEven(prompt("Pick a number.")));

//function that returns the factorial of a number

function factorial(num) {
  var factorial1 = num;
  if (num === 0) {
    return 1;
  } else {
    while (num > 1) {
      factorial1 = factorial1 * (num - 1);
      num--;
    }
    return factorial1;
  }
}

//function that turns kebab-case to snake-case

function kebabToSnake(text) {
  console.log(text.length);
  console.log(text.length + 1);
  console.log(text.indexOf("-"));
  console.log(text.slice(0, text.indexOf("-")));
  console.log(text.slice(text.indexOf("-")));
}
