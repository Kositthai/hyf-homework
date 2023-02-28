import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddTodoHandler from "./AddTodoHandler";

export default function ToDosList({ todoItem }) {
  const [todo, setTodo] = useState(todoItem);

  const mapTodo = () => {
    if (todo.length !== 0) {
      return todo.map((item, index) => (
        <ToDoItem key={index} item={item} todo={todo} setTodo={setTodo} />
      ));
    } else {
      return <p>No items</p>;
    }
  };

  return (
    <div>
      <AddTodoHandler todo={todo} setTodo={setTodo} />
      <ul>{mapTodo()}</ul>
    </div>
  );
}
