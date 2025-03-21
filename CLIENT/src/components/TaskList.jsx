import React, {useEffect} from 'react';
import axios from 'axios';

const TaskList = ({tasks, setTasks})=>{

    useEffect(()=>{
        axios.get("http://localhost:5000/tasks")
        .then((response)=>setTasks(response.data.task))
        .catch((err)=>console.log({message:'Error while fetching the tasks', err}))
    });

    return(
        <div>
            <h3>VIEW TASKS</h3>
            <ul>
                {tasks.map((task)=>(
                    <li key={task._id}>
                        {task.title} - {task.description} - Due Date:{new Date(task.dueDate).toLocaleString()} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;
