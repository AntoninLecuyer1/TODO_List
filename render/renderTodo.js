
export function renderTodo(todo){
    const container = document.querySelector(".container");

    const arrayTodo = document.createElement("ul");
    arrayTodo.classList.add("listTodo");

    const title = document.createElement("li");
    title.classList.add("title")
    title.textContent = todo.title;
    arrayTodo.appendChild(title);

    const description = document.createElement("li");
    description.classList.add("description");
    description.textContent = todo.description;
    arrayTodo.appendChild(description);

    const dueDate = document.createElement("li");
    dueDate.classList.add("dueDate");
    const dueDateFormat =todo.dueDateConv.toLocaleDateString("fr-FR",{
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    })
    dueDate.textContent = dueDateFormat;
    arrayTodo.appendChild(dueDate);

    const priority = document.createElement("li");
    priority.classList.add("priority");
    priority.textContent = todo.priority;
    arrayTodo.appendChild(priority);

    const status = document.createElement("input");
    status.setAttribute("type","checkbox");
    status.classList.add("status");
    status.checked = todo.status;
    arrayTodo.appendChild(status);

    container.appendChild(arrayTodo);
}