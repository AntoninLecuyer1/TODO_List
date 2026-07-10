import { newTodo } from "./todo.js";
import { newProject } from "./project.js";
import { renderProject } from "./render/renderProject.js"
import { getFormTodo } from "./form/getFormTodo.js";
import { formToTodo } from "./formToTodo.js";
import { renderTodo } from "./render/renderTodo.js";
import { getFormProject } from "./form/getFormProject.js";


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
const formDisplayTodo = getFormTodo();
document.body.appendChild(formDisplayTodo);

addTodoBtn.addEventListener('click', () =>{
  formDisplayTodo.showModal();
});

formDisplayTodo.querySelector("form").addEventListener("submit", (event) =>{
  event.preventDefault();
  const addTodoForm = formToTodo(formDisplayTodo)
  project.addTodo(addTodoForm);
  renderTodo(addTodoForm)
  formDisplayTodo.close();
})

/*---------------- Project  ------------------*/
const addProjectBtn = document.querySelector('#addProject-btn');
const formDisplayProject = getFormProject();
document.body.appendChild(formDisplayProject);

addTodoBtn.addEventListener('click', () =>{
  formDisplayProject.showModal();
});

/*---------------- Toggle the burger ------------------*/
const burger = document.querySelector('.burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  sidebar.classList.toggle('is-open');
  burger.style.display = "none";
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('is-open');
  burger.style.display = "block";
});

document.addEventListener('click', (e) => {
  const clickedOutside = !sidebar.contains(e.target) && !burger.contains(e.target);
  if (clickedOutside && sidebar.classList.contains('is-open')) {
    sidebar.classList.remove('is-open');
    burger.style.display = "block";
  }
  
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('is-open');
  }
});
