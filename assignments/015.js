var age = prompt("What is your age in years?");

if (age < 0) {
  alert("You cannot have an age less than zero!");
} else if (age <= 21) {
  alert("Happy 21st birthday!");
} else if (age % math.sqrt(age) === 0) {
  alert("Your age is a perfect square!");
} else if (age % 2 !== 0) {
  alert("Your age, " + age + ", is an odd number!");
} else
  alert(
    "You don't have a negative age, you're not 21, you don't have an odd age and your age is not a perfect square!"
  );
