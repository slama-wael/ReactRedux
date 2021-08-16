
import './App.css';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';

function App() {
  return (
    <div className="App">
     <h1>ToDo List</h1>
      <AddTask />
      <ListTask />
      </div>
  );
}

export default App;
