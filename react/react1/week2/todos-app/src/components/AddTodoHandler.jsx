import { nanoid } from 'nanoid'

export default function AppTodoBtn({ todo, setTodo }) {
  const nanoId = nanoid()

  const addTodoHandler = () => {
    const newTodo = { id: nanoId, description: "randomText" };
    setTodo((previous) => [...previous, newTodo]);
  };

  return <button onClick={addTodoHandler}>Add todo</button>;
}
