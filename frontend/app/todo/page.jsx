'use client'
import AddForm from '@/components/addForm'
import Card from '@/components/card'
import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { useEffect, useState } from 'react'
import getTodos from '../services/getTodos'
import addTodo from '../services/addTodo'
import deleteTodo from '../services/deleteTodo'
import toggleTodo from '../services/toggleTodo'

const TodoPage = () => {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({
    task: "",
    completed: false,
    priority: "medium",
    dueDate: ""
  })
  const [isFormOpen, setIsFormOpen] = useState(false)

  useEffect(() => {
    const todos = getTodos()
    console.log("Loaded todos:", todos)
    setTodos(todos || [])
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(newTodo)
    setTodos(getTodos() || [])
    setIsFormOpen(false)
    setNewTodo({ task: "", completed: false, priority: "medium", dueDate: "" })
  }

  const handleDelete = (id) => {
    deleteTodo(id)
    setTodos(getTodos() || [])
  }

  const handleToggle = (id) => {
    toggleTodo(id)
    setTodos(getTodos() || [])
  }

  return (
    <div className="font-sans grid grid-rows-[auto_1fr_auto] min-h-screen max-w-5xl mx-auto px-8 gap-8">
      <Header />
      <main className="h-full overflow-auto space-y-12">
        {isFormOpen && (
          <section className="absolute inset-0 h-full backdrop-blur-sm w-full p-8 bg-secondary/40 flex justify-center items-center">
            <AddForm
              onSubmit={handleSubmit}
              newTodo={newTodo}
              setNewTodo={setNewTodo}
              setIsFormOpen={setIsFormOpen}
            />
          </section>
        )}

        <section className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-3xl text-primary font-semibold">Tasks</h3>
              <button
                type="button"
                aria-expanded={isFormOpen}
                onClick={() => setIsFormOpen(!isFormOpen)}
                className="bg-primary px-4 py-2 rounded text-white text-lg"
              >
                Add Task
              </button>
            </div>
            <hr className="text-secondary" />
          </div>

          {todos && todos.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {todos.map((todo) => (
                <Card
                  key={todo.id}
                  todo={todo}
                  onDelete={handleDelete}
                  onToggle={handleToggle}
                />
              ))}
            </div>
          ) : (
            <p className="text-lg text-muted-foreground">No task yet.</p>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default TodoPage
