//print all numbers between -10 & 19
console.log("PRINT ALL NUMBERS BETWEEN -10 & 19");
var allNumbers = -10;

while (allNumbers < 20) {
  console.log(allNumbers);
  allNumbers++;
}

//print all even numbers between 10 & 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 & 40");
var evenNumbers = 10;

while (evenNumbers <= 40) {
  if (evenNumbers % 2 === 0) {
    console.log(evenNumbers);
  }
  evenNumbers++;
}

//print all odd numbers between 300 & 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 & 333");
var oddNumbers = 300;

while (oddNumbers <= 333) {
  if (oddNumbers % 2 === 1) {
    console.log(oddNumbers);
  }
  oddNumbers++;
}

//print all numbers divisible by 5 AND 3 between 5 & 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
var divisible = 5;

while (divisible <= 50) {
  if (divisible % 15 === 0) {
    console.log(divisible);
  }
  divisible++;
}
