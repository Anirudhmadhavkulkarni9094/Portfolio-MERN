const express = require('express');
const mongoose = require('mongoose');
const app = express();
const blog = require('./model/BlogSite');
const body_parser = require('body-parser');
const addBlogs = require('./Routers/Add-blogs');
const DeleteBlog = require('./Routers/DeleteBlog');
const cors = require('cors');
const Project = require('./model/ProjectSchema');
const Feedback = require('./model/Feedback')

app.use(cors())
app.use(body_parser.json());



mongoose.connect('mongodb+srv://anirudhkulkarni9094:yj7Hp6RBnEEf0aQV@cluster0.13ujdku.mongodb.net/?retryWrites=true&w=majority').then(res=>{
    console.log("connection established successfully");
}).catch(err => {
    console.log("cannot connect to database " + err )
} )


app.post('/add-blogs', addBlogs);
app.delete('/delete-blog/:id' , DeleteBlog)


app.get('/get-blogs', async (req, res) => {
    try {
        const BlogsData = await blog.find({});
        // console.log(BlogsData);
        res.status(200).json({
            message: "Blogs fetched successfully",
            data: BlogsData
        });
    } catch (err) {
        // console.error(err);
        res.status(500).json({
            message: "Failed to fetch blogs",
            error: err.message
        });
    }
});

app.post('/add-project', async (req, res) => {
    try {
        const newProject = new Project(req.body);
        await newProject.save();
        console.log("Project added successfully");
        console.log("Data added successfully");
        res.status(200).json({
            message: "Data added successfully"
        });
    } catch (err) {
        console.error("Data cannot be added:", err.message);
        res.status(500).json({
            message: "Failed to add data",
            error: err.message
        });
    }
});



app.get('/get-projects' , async (req, res)=>{
    try{
        const projectList  = await Project.find();
        res.status(201).json({
            message : "Data fetched successfully",
            data : projectList
        }) 
    }
    catch{
        res.status(201).json({
            message : "data cannot be fetched"
        })
    }
})

app.get('/feedback' , async (req, res)=>{
    try{
        const feedbacks = await Feedback.find();
        res.status(200).json({
            message : "Feedback fetched",
            data : feedbacks
        })
    }
    catch(err){
        res.status(400).json({
            message : "feedback cannot be fetched"
        })
    }
})

app.post('/add-feedback' , async (req, res) => {
    try {
        await Feedback.create(req.body); // Use 'await' to wait for the data to be added
        res.status(201).json({
            message: "Feedback added successfully"
        });
    } catch (err) {
        res.status(400).json({
            message: "Feedback could not be added"
        });
    }
});



app.listen(3001,()=>{
    console.log("server running at port 3000");
})