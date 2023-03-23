import ToDosList from './components/ToDoList';
import ToDoHeader from './components/ToDoHeader';
import Counter from "./components/Counter";
import './App.css';

const todos = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

export default function App() {

  return (
    <div className="App">
      <ToDoHeader title={"ToDo List"}/>
      <Counter />
      <ToDosList todoItem={todos} />
    </div>
  );
}

