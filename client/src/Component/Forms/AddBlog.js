import React, { useState } from 'react';
import '../Resources/StyleSheet/Login.css';
import axios from 'axios';

function AddBlog() {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/add-blogs', formData);
      console.log('Data added successfully');
      // Optionally, you can add some feedback to the user after successful submission.
      // For example, you can display a success message or clear the form fields.
    } catch (err) {
      console.error('Data cannot be added:', err.message);
      // Optionally, you can add some feedback to the user after failed submission.
      // For example, you can display an error message.
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form_comp'>
          <label>Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className='form_comp'>
          <label>Content</label>
          <textarea
            name='content'
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <button className='Add_Blog_btn btn btn-primary' data-bs-dismiss="modal" type='submit'>Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
