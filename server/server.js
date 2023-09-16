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



mongoose.connect('mongodb+srv://anirudhkulkarni9094:yj7Hp6RBnEEf0aQV@cluster0.13ujdku.mongodb.net/?retryWrites=true&w=majority' , { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("Connection to MongoDB established successfully");
})
.catch(err => {
    console.error("Cannot connect to MongoDB:", err);
});

// Define routes

// Add a new blog
app.post('/add-blogs', addBlogs);

// Delete a blog by ID
app.delete('/delete-blog/:id', DeleteBlog);

// Get all blogs
app.get('/get-blogs', async (req, res) => {
try {
    const BlogsData = await blog.find({});
    res.status(200).json({
        message: "Blogs fetched successfully",
        data: BlogsData
    });
} catch (err) {
    console.error("Failed to fetch blogs:", err.message);
    res.status(500).json({
        message: "Failed to fetch blogs",
        error: err.message
    });
}
});

// Add a new project
app.post('/add-project', async (req, res) => {
try {
    const newProject = new Project(req.body);
    await newProject.save();
    console.log("Project added successfully");
    res.status(201).json({
        message: "Project added successfully"
    });
} catch (err) {
    console.error("Failed to add project:", err.message);
    res.status(500).json({
        message: "Failed to add project",
        error: err.message
    });
}
});

// Get all projects
app.get('/get-projects', async (req, res) => {
    try {
      const projectList = await Project.find();
      res.status(200).json({
        message: "Data fetched successfully",
        data: projectList
      });
    } catch (err) {
      console.error("Failed to fetch projects:", err.message);
      res.status(500).json({
        message: "Failed to fetch projects",
        error: err.message
      });
    }
  });
  
app.delete('/project/:id' , async (req, res) => {
    const blogId = req.params.id;
    try {
        // Find the blog post by ID and remove it from the database
        const deletedBlog = await Project.findByIdAndRemove(blogId);

        if (!deletedBlog) {
            // Blog post with the provided ID not found
            return res.status(404).json({
                message: 'Blog post not found',
            });
        }

        // Blog post successfully deleted
        res.status(200).json({
            message: 'Blog post deleted successfully',
            data: deletedBlog,
        });
    } catch (error) {
        // Handle any errors that occurred during the deletion process
        console.error('Error deleting blog post:', error);
        return res.status(500).json({
            message: 'Failed to delete blog post',
            error: error.message,
        });
    }
})

// Get all feedback
app.get('/feedback', async (req, res) => {
try {
    const feedbacks = await Feedback.find();
    res.status(200).json({
        message: "Feedback fetched",
        data: feedbacks
    });
} catch (err) {
    console.error("Failed to fetch feedback:", err.message);
    res.status(500).json({
        message: "Failed to fetch feedback",
        error: err.message
    });
}
});

app.get('/health' ,(req,res)=>{
    res.send("hey site is up and working")
})

// Add new feedback
app.post('/add-feedback', async (req, res) => {
try {
    await Feedback.create(req.body);
    res.status(201).json({
        message: "Feedback added successfully"
    });
} catch (err) {
    console.error("Failed to add feedback:", err.message);
    res.status(500).json({
        message: "Failed to add feedback",
        error: err.message
    });
}
});

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});



// Graceful shutdown
process.on('SIGINT', () => {
mongoose.connection.close(() => {
    console.log('Mongoose connection is disconnected due to app termination');
    process.exit(0);
});
});