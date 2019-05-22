// printReverse() - write a function that takes an array as an argument and prints out the elements in the array in rverse order
var reverse = [
  "red",
  "yellow",
  "orange",
  "green",
  "purple",
  "blue",
  "black",
  "white"
];

function printReverse(x) {
  for (var i = x.length - 1; i >= 0; i--) {
    console.log(x[i]);
  }
}

// isUniform() - write a function which takes an array as an argument and returns if all elements in the array are identical
var uniform1 = [1, 1, 1, 1, 1];
var uniform2 = [2, 3, 3, 3, 3];

function isUniform(x) {
  var truthValue = true;
  for (var i = 1; i < x.length; i++) {
    if (x[0] !== x[i]) {
      truthValue = false;
      i = x.length;
    } else if (x[0] === x[i]) {
      truthValue = true;
    }
  }
  return truthValue;
}

// sumArray() - write a function that accepts an array of numbers and returns the sum of all numbers in the array

var sum = [1, 2, 3, 4];

function sumArray(x) {
  var total = 0;

  x.forEach(function(x) {
    total = total + x;
  });
  return total;
}

// max() - write a function that accepts an array of numbers and returns the maximum number in the array
var maximum = [15, 20, 15, 20];

function max(x) {
  var max;
  max = x[0];

  x.forEach(function(x) {
    if (max <= x) {
      max = x;
    }
  });
  return max;
}
