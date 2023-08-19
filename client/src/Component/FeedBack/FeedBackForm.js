import React, { useState } from 'react';
import axios from 'axios';
import '../Resources/StyleSheet/FeedbackForm.css';

function FeedBackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [len, setLen] = useState(0);

    const handleInput = (e) => {
        setMessage(e.target.value);
        setLen(e.target.value.length);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://portfolio-17hx.onrender.com/add-feedback', {
                name,
                email,
                message,
            });

            console.log('Response:', response.data);

            // Clear the form fields after successful submission
            setName('');
            setEmail('');
            setMessage('');
            setLen(0);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='m-5 FeedbackForm'>
            <form onSubmit={handleSubmit}>
                <div className='inputField'>
                    <label>Name</label>
                    <input
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='inputField'>
                    <label>Email</label>
                    <input
                        placeholder='Email'
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='inputField'>
                    <label>Message</label>
                    <textarea
                        placeholder='Message'
                        maxLength={200}
                        value={message}
                        onChange={handleInput}
                    />
                    {len}/200
                </div>
                <hr />
                <button type='submit' className='btn btn-primary test-btn'>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default FeedBackForm;
