import React, { useEffect, useState } from 'react'
import FeedbackCard from './FeedbackCard'
import '../Resources/StyleSheet/FeedbackCard.css'
import axios from 'axios';
function FeedbackTest() {
  const [Feedbacks , setFeedback ] = useState([]);
  useEffect(()=>{
    axios.get('https://portfolio-17hx.onrender.com/feedback').then(res=>{
      setFeedback(res.data.data);
    }).catch(err=>{
      console.log(err);
    })
  },[Feedbacks])
  return (
    <div className='feedbacks'>
    {Feedbacks.map(Feedback=>{
      return  <FeedbackCard feedback = {Feedback}/>
    })}
        
    </div>
  )
}

export default FeedbackTest