import { renderTodo } from "./renderTodo.js";

export function renderProject(project){
    const todos = project.getTodos();
    
    todos.forEach(element => {
        renderTodo(element);
    });
}