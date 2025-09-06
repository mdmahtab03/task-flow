import { X, XIcon } from 'lucide-react'
import React from 'react'

const AddForm = ({ newTodo, setNewTodo, onSubmit, setIsFormOpen }) => {
    return (
        <form onSubmit={onSubmit} className="relative sm:max-w-lg w-full p-6 space-y-4 rounded bg-secondary text-white">
            {/* Task title */}
            <div className='absolute top-2 right-2'>
                <button type='button' onClick={() => { setIsFormOpen(false) }} className="cursor-pointer  bg-primary hover:bg-primary/90 p-1 rounded-md"><XIcon className='' /></button>
            </div>
            <div>
                <label htmlFor="task" className="block mb-2">
                    Task
                </label>
                <input
                    id="task"
                    type="text"
                    placeholder="Enter task..."
                    required
                    value={newTodo.task}
                    onChange={(e) => { setNewTodo((todo) => ({ ...todo, task: e.target.value })) }}
                    className="w-full rounded px-3 py-2 text-base border border-primary"
                />
            </div>

            {/* Due Date + Priority in a flex row */}
            <div className="flex gap-4">
                <div className="flex flex-col w-1/2">
                    <label htmlFor="due-date" className="mb-2 text-base">
                        Due date
                    </label>
                    <input
                        id="due-date"
                        type="date"
                        required
                        value={newTodo.dueDate}
                        onChange={(e) => { setNewTodo((todo) => ({ ...todo, dueDate: e.target.value })) }}
                        className="w-full rounded px-3 py-2 text-base border border-primary"
                    />
                </div>
                <div className="flex flex-col w-1/2">
                    <label htmlFor="priority" className="mb-2 text-base">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="w-full rounded px-3 py-2 text-base border border-primary bg-secondary"
                        
                        value={newTodo.priority || "medium" }
                        onChange={(e) => { setNewTodo((todo) => ({ ...todo, priority: e.target.value })) }}
                    >
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                    </select>
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full rounded py-2 text-base bg-primary hover:bg-primary/90"
            >
                Add Task
            </button>
        </form>
    )
}

export default AddForm
