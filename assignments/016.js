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
    evenNumbers++;
  }
}
