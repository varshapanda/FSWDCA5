import React, {useState} from 'react';
import axios from 'axios';

const AddTasks = ({setTasks})=>{
    const[name, setName] = useState("");
    const[description, setDescription] = useState("");
    const[dueDate, setDueDate] = useState("");
    const[status, setStatus] = useState("Pending");

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            const response = await axios.post("http://localhost:5000/tasks", {
                name, 
                description,
                dueDate,
                status
            });
            setTasks((prevTasks)=>[prevTasks, response.data.newTask]);
            setName("");
            setDescription("");
            setDueDate("");
            setStatus("Pending");
        }

        catch(err){
            console.log({message:'Error adding the tasks', err});
        }
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h3>ADD TASKS</h3>
                <div>
                    <label>Name: </label>
                    <input
                    type="text"
                    placeholder='Enter the task name'
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Description: </label>
                    <input
                    type="text"
                    placeholder='Enter the description'
                    value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Due Date: </label>
                    <input
                    type="date"
                    placeholder='Add the due date'
                    value={dueDate}
                    onChange={(e)=>setDueDate(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Status: </label>
                    <select
                    value={status}
                    onChange={(e)=>setStatus(e.target.value)}
                    >
                        <option value = "Done">Done</option>
                        <option value = "Pending">Pending</option>
                        <option value = "In-Progress">In-Progress</option>
                    </select>
                </div>

                <button type="submit">Add Task</button>
            </form>
        </div>
    )

}

export default AddTasks;