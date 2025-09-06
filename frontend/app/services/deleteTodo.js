const deleteTodo = (id)=>{
    console.log("Deleting todo")
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    const index = todos.findIndex((todo)=>todo.id === id);
    if(index !== -1){
        todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(todos));
    }
} 
export default deleteTodo