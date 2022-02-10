import React, { useEffect, useState } from "react";
import Addtodo from "./components/add-todo";
import "./App.css";
import useLocalStorage from "./hooks/use-set-get-remove-items";

function App() {
  const [text, setText] = useState("");
  const [todoList, setTodolist, removeTodoList] = useLocalStorage(
    "todoList",
    []
  );
  const [todos, setTodos] = useState(todoList);
  useEffect(() => {
    setTodolist(todos);
  }, [todos]);

  const changeText = (e) => {
    setText(e.target.value);
  };
  const submitText = (e) => {
    e.preventDefault();

    setTodos([...todos, text]);
    console.log(todos);
    setText("");
  };
  const delethandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="body">
        <h2>Todo App</h2>
        <form onSubmit={submitText}>
          <input
            type="text"
            name="text"
            className="input"
            value={text}
            onChange={changeText}
          />
          <input type="submit" value="Add" name="Add" className="button" />
          <input
            type="button"
            value="remove"
            name="remove"
            className="button"
            onClick={() => {
              removeTodoList();
              setTodos([]);
            }}
          />
        </form>
        <Addtodo todolist={todos} delethandler={delethandler} />
      </div>
    </div>
  );
}

export default App;
