import React, { useState } from "react";
import Border from "./Border";
import PropTypes from "prop-types";

export default function ToDoItem({ item, data, setData }) {
  
  const [isDone, setisDone] = useState(false);
  const [editTodo, setEditTodo] = useState(false);
  const [updateDes, setUpdateDes] = useState(item.description);

  const editHandler = () => {
    setEditTodo((isUpdate) => !isUpdate);

    if (updateDes.length === 0) {
      alert("Todo description can not be blank...");
      setUpdateDes(item.description);
    } else {
      const newlist = data.map((current) =>
        current.id === item.id
          ? { ...current, description: updateDes }
          : current
      );

      setData(newlist);
    }
  };

  const deleteHandler = () => {
    setData(data.filter((lastestData) => lastestData.id !== item.id));
  };

  return (
    <Border>
      <div>
        {editTodo ? (
          <input
            onChange={(e) => setUpdateDes(e.target.value)}
            value={updateDes}
          />
        ) : (
          <div
            style={{ textDecorationLine: isDone ? "line-through" : "none" }}
          >
            <span>{item.description}</span>
            <span>{item.deadline}</span>
          </div>
        )}

        <input
          type={"checkbox"}
          value={isDone}
          onClick={() => setisDone((previous) => !previous)}
        />

        <button onClick={() => deleteHandler()}>Delete</button>
        <button onClick={() => editHandler()}>
          {editTodo ? "Update" : "edit"}
        </button>
      </div>
    </Border>
  );
}

ToDoItem.propTypes = {
  item: PropTypes.object,
  setData: PropTypes.func, 
  data: PropTypes.array,
}


/* 
     editHandler function will update editTodo button is clicked to true 
     we loop over the current data and finding if the item that was clicked on editTodo btn having a same id number 
     if matching, we will copy the data using spread operator and update description to the new value that user input
     then update data using setData hook with the new information otherwise setData with info (curent) 
     ** list will represent current data before update description

     in condition if update.length === 0 we setUpdateDes back to current description otherwise the updateDes will 
     update to empty value and cause probelm for the next to click edit because now updateDes is set to empty 
     so you will get alert in the second the you clicked instead of the first time 
  */