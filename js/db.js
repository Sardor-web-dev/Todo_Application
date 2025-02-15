const todoCards = JSON.parse(localStorage.getItem("tasks")) ?? [];

console.log(todoCards);


// Nullish operator for true or false you can use this operator to "||""
//??

// JS to JSON
// console.log(JSON.stringify(todoCards));
// console.log(JSON.parse(JSON.stringify(todoCards)));


// get from localStorage and parsing
// const todos = JSON.parse(localStorage.getItem("tasks"));
// console.log(todos);
