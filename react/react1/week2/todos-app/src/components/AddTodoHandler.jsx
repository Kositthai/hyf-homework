export default function AppTodoBtn({ todo, setTodo }) {
  const addTodoHandler = () => {
    const newTodo = { id: Math.random() * 1000, description: "randomText" };
    setTodo((previous) => [...previous, newTodo]);
  };

  return <button onClick={addTodoHandler}>Add todo</button>;
}
