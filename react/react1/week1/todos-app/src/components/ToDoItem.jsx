import React from 'react'; 

export default function ToDoItem ({item}) {
   return (
    <p>
      {item.description} | {item.deadline}
    </p>
   )
}