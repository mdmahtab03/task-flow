const addTodo = (todo)=>{
    console.log("Adding todo")
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    const lastId = todos.length >0? todos[todos.length-1].id : 0;
    const newTodo = {id:lastId+1, ...todo};
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
} 
export default addTodo