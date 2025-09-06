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
    <div className="w-full border border-secondary p-3 rounded flex items-center justify-between text-sm">
      {/* Left  */}
      
    </div>
  );
};

export default Card;
