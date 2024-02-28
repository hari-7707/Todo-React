import React, { useState } from "react";
import useTodoContext from "../Contexts/TodoContext";

function TodoItem({ todoElement }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoElement.msg);
  const { updateTodo, deleteTodo, toggleIsCompleted } = useTodoContext();

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoElement.isCompleted ? "bg-[#9DBF9E]" : "bg-[#ccbed7]"
      } w-full`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todoElement.isCompleted}
        onChange={() => {
          toggleIsCompleted(todoElement.id);
        }}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoElement.isCompleted ? "line-through" : ""} font-sans `}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todoElement.isCompleted) return;

          if (isTodoEditable) {
            updateTodo(todoElement.id, { ...todoElement, msg: todoMsg });
            setIsTodoEditable(false);
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todoElement.isCompleted}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoElement.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
