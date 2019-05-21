var yesOrNo = prompt("Are we there yet?");

while (yesOrNo !== "yes" || yesOrNo !== "yeah") {
  yesOrNo = prompt("Are we there yet?");
}

alert("Great!");
