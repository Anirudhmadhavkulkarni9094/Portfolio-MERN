import React from 'react';
import axios from 'axios';
import '../Resources/StyleSheet/BlogCard.css';

function BlogCard({ blog, onDelete }) {
    const { title, content, _id, date } = blog;

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:3001/delete-blog/${_id}`);
            onDelete(_id);
        } catch (error) {
            console.log("Error deleting blog:", error);
        }
    };

    // Function to format the date in a user-friendly way
    const formatBlogDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className='Title_blogs m-3'>
            <div>
                {title}
            </div>
            <div>
                <button type="button" className="btn btn-outline-light mx-2" data-bs-toggle="modal" data-bs-target={`#${_id}`}>
                    Read More
                </button>
            </div>

            {/* Bootstrap Modal */}
            <div className="modal fade light" id={_id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen w-75 h-75 m-auto">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5 text-light" id="exampleModalLabel">Title: {title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body px-5">
                            <p className="blog-date">Posted On: {formatBlogDate(date)}</p>
                            <p className='content'>
                            {content}
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleDelete} data-bs-dismiss="modal" data-bs-target="#FullBlog">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Bootstrap Modal */}
        </div>
    );
}

export default BlogCard;
