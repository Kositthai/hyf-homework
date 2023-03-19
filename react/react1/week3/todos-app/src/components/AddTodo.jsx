import { useState } from "react";

export default function AddTodo({ setData }) {
  const [todoDes, setTodoDes] = useState("");
  const [deadline, setDeadline] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    const convertCurrentDate = new Date().toJSON().slice(0, 10);
    const currentDate = new Date(convertCurrentDate).getTime();
    const selectedDate = new Date(deadline).getTime();

    const newTodo = {
      id: Math.random() * 100,
      description: todoDes,
      deadline: deadline,
    };

    if (todoDes.length === 0) {
      alert("Todo description can not be blank...");
    } else if (deadline.length === 0) {
      alert("Please select deadline date...");
    } else if (selectedDate < currentDate) {
      alert(`Invalid deadline. Please choose dateline before ${convertCurrentDate}`);
    } else {
      setData((previousTodo) => [...previousTodo, newTodo]);
    }
  };

  return (
    <form>
      <div>
        <label htmlFor="todoDescription">Todo description </label>
        <input
          id="todoDescription"
          onChange={(e) => setTodoDes(e.target.value)}
          value={todoDes}
        />
      </div>

      <div>
        <label htmlFor="deadline">Deadline </label>
        <input
          id="deadline"
          type={"date"}
          onChange={(e) => setDeadline(e.target.value)}
          value={deadline}
        />
      </div>

      <button type="submit" onClick={addTodoHandler}>
        Add todo
      </button>
    </form>
  );
}
