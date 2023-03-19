import ToDoHeader from "./components/ToDoHeader";
import Counter from "./components/Counter";
import TodoOverview from "./components/TodoOverview";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <ToDoHeader title={"ToDo List"} />
      <Counter />
      <TodoOverview />
    </div>
  );
}
