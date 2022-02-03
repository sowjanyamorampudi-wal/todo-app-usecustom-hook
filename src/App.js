import React, { useState } from "react";
import Addtodo from "./components/add-todo";
import "./App.css";
import {
  useSetItem,
  useGetItem,
  useRemoveItem,
} from "./components/use-set-get-remove-items";

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(useGetItem("todos"));
  useSetItem("todos", todos);

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
  const removeItem = useRemoveItem("todos");

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
            className="button"
            onClick={() => {
              removeItem();
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
