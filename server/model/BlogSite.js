const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title : {
        type: String, 
        required : true,
    },
    content: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now, // Set the default value to the current timestamp when a new document is created
    },
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;
