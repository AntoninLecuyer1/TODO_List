import {newTodo} from "./todo.js";
import {newProject} from "./project.js";


const project = newProject("Brassage IPA");
const todo1 = newTodo("Acheter du houblon", "desc", "2025-01-01", "haute");


project.addTodo(todo1);


console.log(project.getTodos().length === 1 ? "addTodo OK" : "addTodo FAIL");

project.removeTodo(todo1.id);

console.log(project.getTodos().length === 0 ? "removeTodo OK" : "removeTodo FAIL");