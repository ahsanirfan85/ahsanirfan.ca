var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
while (input !== "quit") {
  if (input === "list") {
    console.log("**********");
    todos.forEach(function(todo, i) {
      console.log(i + ": " + todo);
    });
    console.log("**********");
  } else if (input === "new") {
    var newTodo = prompt("Enter new todo");
    todos.push(newTodo);
  } else if (input === "delete") {
    var index = prompt("What would you like to delete?");
  }
  input = prompt("What would you like to do?");
  todos.splice(index, 1);
  console.log("Deleted Todo");
}
console.log("OK YOU QUIT THE APP");
