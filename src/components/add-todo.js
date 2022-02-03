import React from "react";
const Addtodo = ({ todolist, delethandler }) => {
  return (
    <>
      {todolist.map((todo, index) => (
        <div key={index}>
          <h2>
            {todo}
            <button onClick={() => delethandler(index)}>Delete</button>
          </h2>
        </div>
      ))}
    </>
  );
};
export default Addtodo;
