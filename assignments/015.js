var age = prompt("What is your age in years?");
if (age < 0) {
  alert("You cannot have an age less than zero!");
}
if (age === 21) {
  alert("Happy 21st birthday!");
}
if (age % 2 !== 0) {
  alert("Your age, " + age + ", is an odd number!");
}
if (age % math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
}
