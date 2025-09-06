'use client'
import AddForm from '@/components/addForm'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { use, useEffect, useState } from 'react'
import getTodos from '../services/getTodos'
import addTodo from '../services/addTodo'
import deleteTodo from '../services/deleteTodo'
import toggleTodo from '../services/toggleTodo'

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ task: "", completed: false, priority: "", dueDate: "" });
    const [isFormOpen, setIsFormOpen] = useState(false)
    // Loading Todos on initial render
    useEffect(() => {
        const todos = getTodos();
        setTodos(todos || []);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(newTodo);
        const todos = getTodos();
        setTodos(todos || []);
        setIsFormOpen(false);
        setNewTodo({ task: "", completed: false, priority: "medium", dueDate: "" });
    }
    const handleDelete = (id)=>{
        deleteTodo(id);
        const todos = getTodos();
        setTodos(todos || []);
    }
    const handleToggle = (id) =>{
        toggleTodo(id);
        const todos = getTodos();
        setTodos(todos || []);        
    }
   
    return (
        <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen px-8 gap-8">
            <Header />
            <main className='h-full overflow-auto space-y-8'>
                <section className={`absolute inset-0 h-full backdrop-blur-sm w-full p-8 bg-secondary/40 flex justify-center items-center ${isFormOpen? "block":"hidden"} `}>
                    <AddForm onSubmit={handleSubmit} newTodo = {newTodo} setNewTodo = {setNewTodo} setIsFormOpen = {setIsFormOpen}/>
                </section>
                <section className='space-y-6'>
                    <div>
                        <div className='flex justify-between items-center mb-1'>
                            <h3 className='text-xl text-primary font-semibold'>Tasks</h3>
                            <button type='button' onClick={()=>{setIsFormOpen(!isFormOpen)}} className='bg-primary px-2 py-0.5 rounded text-white'>Add Task</button>
                        </div>
                        <hr className='text-secondary' />
                    </div>
                    {todos && todos.length > 0? (<div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                        {todos.map((todo) => (
                            <Card key={todo.id} todo = {todo} onDelete = {handleDelete} onToggle={handleToggle} />
                        ))}
                    </div>) : (<p>No task yet.</p>)}
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default TodoPage
