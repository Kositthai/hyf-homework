import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import ToDosList from './components/ToDoList';
import todoInfo from './todoInfo.json'; 
import ToDoHeader from './components/ToDoHeader';

function App() {
  return (
    <div className="App">
      <ToDoHeader title={"ToDo List"}/>
      <ToDosList todoInfo={todoInfo} />
    </div>
  );
}

export default App;
