import React from 'react'; 

export default function ToDoItem ({description, deadline}) {
   return (
    <p>
      {description} | {deadline}
    </p>
   )
}