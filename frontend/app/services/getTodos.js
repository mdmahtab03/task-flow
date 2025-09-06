const getTodos = () => {
  console.log("Getting todo")
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export default getTodos;
