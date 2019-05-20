var age = prompt("What is your age in years?");
if (age < 0) {
  alert("You cannot have an age less than zero!");
} else if ((age = 21)) {
  alert("Happy 21st birthday!");
} else if (age % 2 != 0) {
  alert("Your age, " + age + ", is an odd number!");
}
