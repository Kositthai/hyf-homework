import React, { useState } from "react";
import DeleteTodoHandler from "./DeleteTodoHandler";

export default function ToDoItem({ item, todo, setTodo }) {
  const [checked, setChecked] = useState(false);

  return (
    <li>
      {/* set style to change base on state change, you have to keep style condition is the element that you want to change */}
      <label style={{ textDecorationLine: checked ? "line-through" : "none" }}>
        {item.description}
      </label>
      <input
        type={"checkbox"}
        value={checked}
        onClick={() => setChecked((previous) => !previous)}
      />
      <DeleteTodoHandler item={item} todo={todo} setTodo={setTodo} />
    </li>
  );
}
