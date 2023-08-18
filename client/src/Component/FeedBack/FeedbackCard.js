import React from 'react'
import '../Resources/StyleSheet/FeedbackCard.css'
function FeedbackCard({feedback}) {
  return (
    <>
    <div className='Feedback-card m-5'>
        <div className='Header'>
            <h5>{feedback.name}</h5>
        </div>
        <div className='body'>
            <p>{feedback.message}</p>
        </div>
    </div>
    </>
  )
}

export default FeedbackCard