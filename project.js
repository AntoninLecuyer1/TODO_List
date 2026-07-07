
function newProject (nameOfProject,todos = []){
    let todos = [];

    return{
        nameOfProject,
        addTodo: (todo) =>{
            if(todo && todo.id && todo.title){
                todos.push(todo);
            }else{
                console.log("Not a Todo in entry")
            }
            
        },
        getTodos: () =>{
            const copyTodos = [...todos];
            return copyTodos;
        },
        removeTodo: (id) =>{
            todos = todos.filter((todo) => todo.id != id);
        }

    }

}

function addTodoToProject(project,todo){
    project.addTodo(todo);

}

var projects = [];
projects.push(newProject("Name of project"));