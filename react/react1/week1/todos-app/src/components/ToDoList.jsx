import React from 'react'; 
import ToDoItem from './ToDoItem';

export default function ToDosList ({todoInfo}) {
    return (
        <div>
            {todoInfo.map((list, index) => (
                <ToDoItem key={index} description={list.description} deadline={list.deadline}/>
            ))}
        </div>
    )
}