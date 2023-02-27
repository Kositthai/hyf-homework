export default function DeleteTodoHandler({ todo, setTodo, item }) {
  const deleteHandler = () => {
    setTodo(todo.filter((lastestData) => lastestData.id !== item.id));
  };

  return <button onClick={deleteHandler}>Delete</button>;
}
