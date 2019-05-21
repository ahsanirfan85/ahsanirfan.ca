//print all numbers between -10 & 19
console.log("PRINT ALL NUMBERS BETWEEN -10 & 19");
for (var i = -10; i < 20; i++) {
  console.log(i);
}

//print all even numbers between 10 & 40
console.log("PRINT ALL EVEN NUMBERS BETWEEN 10 & 40");
for (var j = 10; j <= 40; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}

//print all odd numbers between 300 & 333
console.log("PRINT ALL ODD NUMBERS BETWEEN 300 & 333");
for (var k = 300; k <= 333; k++) {
  if (k % 2 === 1) {
    console.log(k);
  }
}

//print all numbers divisible by 5 AND 3 between 5 & 50
console.log("PRINT ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50");
for (var l = 5; l <= 50; l++) {
  if (l % 15 === 0) {
    console.log(l);
  }
}
