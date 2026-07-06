
function newProject (nameOfProject,todos = []){
    return{
        nameOfProject,
        todos 
    }

}

var projects = [];
projects.push(newProject("Name of project"));