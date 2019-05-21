var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
if (input === "list") {
  console.log(todos);
} else if (input === "new") {
  var new Todo = prompt("Enter new todo");
  todos.push(newTodo);
}
