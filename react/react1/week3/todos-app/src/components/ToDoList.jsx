import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDosList({ data, setData }) {
  return (
    <div>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <ToDoItem key={item.id} item={item} data={data} setData={setData} />
          ))
        ) : (
          <p>No items</p>
        )}
      </ul>
    </div>
  );
}
