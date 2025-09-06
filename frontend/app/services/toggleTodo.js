const toggleTodo = (id) =>{
    console.log("Toggling todo")
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    let todo = todos.find((todo)=>todo.id === id);
    todo.completed = !todo.completed;
    localStorage.setItem("todos",JSON.stringify(todos))
}

export default toggleTodo;