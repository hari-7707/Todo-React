import React, { useState, useEffect } from "react";
import { TodoContextProvider } from "./Contexts/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todoMsg) => {
    setTodoList((prevList) => [
      ...prevList,
      {
        id: Math.floor(Math.random() * 10 + 1),
        isCompleted: false,
        msg: todoMsg,
      },
    ]);
  };
  const updateTodo = (id, todoMsg) => {
    setTodoList((prevList) =>
      prevList.map((eachTodo) =>
        eachTodo.id === id ? { ...eachTodo, msg: todoMsg } : eachTodo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodoList((prevList) => prevList.filter((eachTodo) => eachTodo.id != id));
  };

  const toggleIsCompleted = (id) => {
    setTodoList((prevList) =>
      prevList.map((eachTodo) =>
        eachTodo.id === id
          ? { ...eachTodo, isCompleted: !eachTodo.isCompleted }
          : eachTodo
      )
    );
  };

  useEffect(() => {
    const todoList = JSON.parse(sessionStorage.getItem("todoList"));

    if (todoList && todoList.length > 0) {
      setTodoList(todoList);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContextProvider
      value={{ todoList, addTodo, updateTodo, deleteTodo, toggleIsCompleted }}
    >
      <div className="bg-[#987284] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-[Black]">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2 font-sans">
            MANAGE YOUR TODOS
          </h1>
          <div className="mb-4">
            {/**TodoForm */}
            {<TodoForm></TodoForm>}
          </div>
          <div className="flex flex-wrap gap-y-3 ">
            {/*Loop and Add TodoItem here */}
            {todoList.map((eachTodo) => (
              // <div key={eachTodo.id} className="">
              <TodoItem todoElement={eachTodo} key={eachTodo.id}></TodoItem>
              // </div>
            ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
};

export default App;
