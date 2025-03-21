import React , { useState } from 'react'
// import './App.css'
import AddTasks from './components/AddTasks';
import TaskList from './components/TaskList';

const App = ()=>{
  const[tasks, setTasks] = useState([]);

  return(
    <div>
      <h1> TASK MANAGER </h1>
      <AddTasks setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default App
