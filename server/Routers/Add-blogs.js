const blog = require('../model/BlogSite')
const addBlogs = async (req, res) => {
    try {
        const newBlog = new blog(req.body);
        await newBlog.save();
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
};

module.exports = addBlogs;