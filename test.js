import {newTodo} from "./todo.js";
import {newProject} from "./project.js";


const project = newProject("Brassage IPA");
const todo1 = newTodo("Acheter du houblon", "desc", "2025-01-01", "haute");


project.addTodo(todo1);


console.log(project.getTodos().length === 1 ? "addTodo OK" : "addTodo FAIL");

project.removeTodo(todo1.id);

console.log(project.getTodos().length === 0 ? "removeTodo OK" : "removeTodo FAIL");

const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('is-open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('is-open');
});

document.addEventListener('click', (e) => {
  const clickedOutside = !sidebar.contains(e.target) && !burger.contains(e.target);
  if (clickedOutside && sidebar.classList.contains('is-open')) {
    sidebar.classList.remove('is-open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('is-open');
  }
});
