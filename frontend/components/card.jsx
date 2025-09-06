'use client'
import { Trash2 } from "lucide-react";

const priorityStyles = {
  low: "bg-green-200 text-green-600",
  medium: "bg-yellow-200 text-yellow-600",
  high: "bg-red-200 text-red-600",
};

const Card = ({ todo, onDelete, onToggle }) => {
  if (!todo) return null;

  return (
    <div className="w-full border border-secondary p-4 rounded-md flex items-center justify-between text-base">
      {/* Left */}
      <div className="flex flex-col">
        <span
          className={`text-lg font-semibold ${
            todo.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {todo.task}
        </span>
        <span className="text-sm text-gray-500">Due: {todo.dueDate}</span>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded text-sm font-medium ${
            priorityStyles[todo.priority?.trim()] || ""
          }`}
        >
          {todo.priority}
        </span>

        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          aria-label="Mark task completed"
          className="cursor-pointer size-5 hover:bg-red-200 p-1 rounded-md hover:shadow-lg active:shadow-none active:translate-y-[0.5px] transition"
        />

        <button
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
        >
          <Trash2 className="cursor-pointer text-red-500 size-7 hover:bg-red-200 p-1 rounded-md hover:shadow-lg active:shadow-none active:translate-y-[0.5px] transition" />
        </button>
      </div>
    </div>
  );
};

export default Card;
