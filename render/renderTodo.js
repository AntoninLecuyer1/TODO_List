// title,description,dueDate,priority,status = false

function renderTodo(todo){
    const container = document.querySelector("#container");

    const arrayTodo = document.createElement("ul","class = arrayTodo liste-style=none");
    container.appendChild(arrayTodo);

    const title = document.createElement("li","class=title");
    title.textContent = todo.title;
    arrayTodo = appendChild(title);
}