import React from "react";

export const TodoContext = React.createContext({
  todoList: [
    {
      id: 1,
      msg: "",
      isCompleted: false,
    },
  ],
  addTodo: (msg) => {},
  updateTodo: (id, msg) => {},
  deleteTodo: (id) => {},
  toggleIsCompleted: (id) => {},
});

export const TodoContextProvider = TodoContext.Provider;

const useTodoContext = () => {
  return React.useContext(TodoContext);
};

export default useTodoContext;
