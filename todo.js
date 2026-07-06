

function createTodo(title,description,dueDate,priority,status = false){
    const id = Math.floor(Math.random()*1000);
    
    return{
        id,
        title,
        description,
        dueDate,
        priority,
        status
    }
}