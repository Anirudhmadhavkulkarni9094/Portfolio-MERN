import React from 'react'
import FeedbackTest from './FeedbackTest';
import FeedBackForm from './FeedBackForm';
import '../Resources/StyleSheet/FeedbackForm.css'


function FeedBack() {
  return (
    <div>
        <div className='row feedback-page'>
            <div className='col-lg-6 col-sm-12 feedback-page'>
                <FeedbackTest></FeedbackTest>
            </div >
            <div className='col-lg-6 col-sm-12 feedback-page'>
                <FeedBackForm></FeedBackForm>
            </div>  
        </div>
    </div>
  )
}

export default FeedBack