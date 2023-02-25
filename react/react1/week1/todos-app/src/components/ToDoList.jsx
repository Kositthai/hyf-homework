import React from 'react'; 
import ToDoItem from './ToDoItem';

export default function ToDosList ({todoInfo}) {
    return (
        <div>
            {todoInfo.map((item, index) => (
                <ToDoItem key={index} item ={item}/>
            ))}
        </div>
    )
}