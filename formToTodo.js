import { newTodo } from "./todo.js";


function formToTodo(dialog){
    const title = dialog.querySelector("#titleForm").value;
    const description = dialog.querySelector("#descriptionForm").value;
    const dueDate = dialog.querySelector("#dueDateForm").value;
    const priority = dialog.querySelector('input[name="priority"]:checked').value;

    return newTodo(title,description,dueDate,priority);
}