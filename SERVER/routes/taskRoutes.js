const express = require('express');
const Task = require("../models/Task.js");
const router = express.Router();

router.post("/", async(req, res)=>{
    try{
        const {title, description, dueDate} = req.body;

        if(!title||!description||!dueDate){
            return res.status(400).json({message:'title, description and Due Date are required fields'});
        }

        const newTask = await new Task({title, description, dueDate:(new Date(dueDate))});
        await newTask.save();

        return res.status(201).json({message:"New task added successfully", newTask});
    }
    catch(err){
        return res.status(500).json({message:'Error adding task', err});
    }
})

router.get("/", async(req, res)=>{
    try{
        const task = await Task.find();
        return res.status(200).json({message:"All tasks fetched successfully", task});
    }
    catch(err){
        return res.status(500).json({message:'Error fetching tasks', err});
    }
});

module.exports = router;