import { newTodo } from "./todo.js";
import { newProject } from "./project.js";
import { renderProject } from "./render/renderProject.js"
import { getFormTodo } from "./form/getFormTodo.js";
import { formToTodo } from "./formToTodo.js";


const project = newProject("Brassage IPA");
const todo1 = newTodo("Acheter du houblon", "desc", "2025-01-01", "haute");
const todo2 = newTodo("Creer la recette", "Desc", "2025-01-07", "moyenne");
const todo3 = newTodo("Brasser","Utiliser recette","2025-01-15","basse",true);

project.addTodo(todo1);
project.addTodo(todo2);
project.addTodo(todo3);

renderProject(project);


/*---------------- Form ------------------*/
const addTodoBtn = document.querySelector('#addTodo-btn');
const formDisplay = getFormTodo();
document.body.appendChild(formDisplay);



addTodoBtn.addEventListener('click', () =>{
  formDisplay.showModal();
});

formDisplay.querySelector("form").addEventListener("submit", (event) =>{
  event.preventDefault();
  project.addTodo(formToTodo(formDisplay));
  renderProject(project);
  formDisplay.close();
})



/*---------------- Toggle the burger ------------------*/
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
