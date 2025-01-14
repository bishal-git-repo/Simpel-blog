//external modules
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title: { 
            type: String, 
            required: true 
        },
        description: { 
            type: String, 
            required: true 
        },
        image:{
            type: String,
            required: true,
        },
        author: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User', 
            required: true 
        },
    },
    {timestamps: true}
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;