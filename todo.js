export function newTodo(title,description,dueDate,priority,status = false){
    const id = Math.floor(Math.random()*1000);
    const dueDateConv = new Date(dueDate);

    return{
        id,
        title,
        description,
        dueDateConv,
        priority,
        status
    }
}