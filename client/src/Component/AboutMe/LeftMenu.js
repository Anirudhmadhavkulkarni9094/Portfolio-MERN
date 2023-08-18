import React from 'react'
import ProfileImg from '../Resources/Img/Profile.jpg'
import '../Resources/StyleSheet/About.css';

function LeftMenu() {
  return (
    <>
      <img src={ProfileImg} className='profileImg' alt=''></img>        
        <div className='desc'>   
                <h5>Anirudh Madhav Kulkarni</h5>
                <a href='https://github.com/Anirudhmadhavkulkarni9094'><h5 className='id'><i class="bi bi-github"></i> Anirudhmadhavkulkarni9094</h5></a>
                <h5 className='dept'>📝 Electronics and Instrumentation Engineer (2023)</h5>
        </div>
        <div className='personal_Data'>
            <p><i class="bi bi-building"></i> Bangalore institute of technology</p>
            <p><i class="bi bi-geo-fill"></i> Bangalore, India</p>
            <p><i class="bi bi-envelope-at"></i> Anirudhkulkarni9094@gmail.com</p>
        </div> 
    </>
  )
}

export default LeftMenu