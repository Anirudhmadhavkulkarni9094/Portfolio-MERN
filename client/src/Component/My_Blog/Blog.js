import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import '../Resources/StyleSheet/BlogCard.css';
import axios from 'axios';
function Blog() {
    const [Blogs , setBlogs] = useState([]);
    useEffect(()=>{
        axios.get('https://portfolio-17hx.onrender.com/get-blogs').then(res=>{
            setBlogs(res.data.data);
        }).catch(err=>{
            console.log(err);
        })
    })
    const handleDelete = (deletedBlogId) => {
        
        setBlogs(Blogs.filter(blog => blog._id !== deletedBlogId));
    };

    
  return (

    <div className='mx-5'>
    {Blogs.map(blog=>{
        return <BlogCard blog = {blog} key={blog._id} onDelete={handleDelete} ></BlogCard>
    })}
    </div>
  )
}

export default Blog