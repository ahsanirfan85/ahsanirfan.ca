var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
while(input != "quit"){
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    var new Todo = prompt("Enter new todo");
    todos.push(newTodo);
  }
}
console.log("OK YOU QUIT THE APP");