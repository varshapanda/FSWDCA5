const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRouter = require("./routes/taskRoutes.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
.connect("mongodb+srv://varshavpanda006:mIHuvryn6ebFbxji@cluster0.newhk.mongodb.net/FSWDCA5")
.then(()=>console.log("Database connected successfully"))
.catch((err)=>console.log("Database connection failed", err));

app.use("/tasks", taskRouter);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port, http://localhost:${PORT}`);
})