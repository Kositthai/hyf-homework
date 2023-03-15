import { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import ToDosList from "./ToDoList";

export default function TodoForm() {
  const [data, setData] = useState([]); // API data
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    try {
      fetch(
        "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
      )
        .then((response) => response.json())
        .then((data) => setData(data));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <AddTodo setData={setData} />
      <ToDosList data={data} setData={setData} />
    </>
  );
}
