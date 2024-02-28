import React, { useState } from "react";
import useTodoContext from "../Contexts/TodoContext";

function TodoForm() {
  const { addTodo } = useTodoContext();
  const [msg, setMsg] = useState("");
  return (
    <form
      className="flex"
      onSubmit={(e) => {
        console.log("in submit");
        e.preventDefault;
        if (!msg || msg.length <= 0) return;
        addTodo(msg);
        setMsg("");
      }}
    >
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        type="text"
        placeholder="Write Todo..."
        className="text-[black] w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5 font-medium font-sans"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#EE7674] text-[#D0D6B5] shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
