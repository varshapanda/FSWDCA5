const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    dueDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        enum:["Done", "Pending", "In-Progress"],
        default:"Pending"
    },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;