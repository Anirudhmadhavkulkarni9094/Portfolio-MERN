import React from 'react'
import '../Resources/StyleSheet/Profile.css'
import Skills from './Skills'

function Profile() {
  return (
    <div>
        <h5 className='m-3 water-fill '>Hi there! 👋 I'm Anirudh Madhav Kulkarni</h5>
        <hr></hr>
        <h5 className='m-3'>About me</h5>
        <hr></hr>
        <ul>
            <li>🔭 I’m currently working on my portfolio website</li>
            <li>🌱 I’m currently learning React.js and Node.js</li>
            <li>💬 Ask me about Data Structures & Algorithms</li>
            <li>⚡ Fun fact: I think I am funny 😎🤣</li>
        </ul>
        <h5 className='m-3'>Connect with Me</h5>
        <hr></hr>
        <ul className='profile_link'>
            <li>LinkedIn : <a href='https://www.linkedin.com/in/anirudhmadhavkulkarni/'> anirudh-madhav-kulkarni</a></li>
            <li>HackerRank : <a href='https://www.hackerrank.com/Anirudh9094?hr_r=1'>anirudhkulkarni9094</a></li>
            <li>LeetCode : <a href='https://leetcode.com/anirudhkulkarni9094/'>anirudhkulkarni9094</a></li>
            <li>HackerEarth : <a href='https://www.hackerearth.com/@anirudhkulkarni9094'> anirudhkulkarni9094</a></li>
            <li>Email : <a href='mailto:Anirudhkulkarni9094@gmail.com'>Anirudhkulkarni9094@gmail.com</a></li>
        </ul>
        <h5 className='m-3'>Languages and Tools</h5>
        <Skills/>
        <hr/>
        <h5 className='m-3'>Education</h5>
        <hr></hr>
        <ul>
            <li>Bachelor's of Engineering, Bangalore Institute of Technology, CGPA: 8.4/10</li>
            <li>Kendriya Vidyalaya ASC center, 12th Bangalore, CGPA: 8.7/10</li>
            <li>Kendriya Vidyalaya Island Grounds, 10th Chennai, CGPA: 9.4/10</li>
        </ul>
        <hr></hr>
        <a href='Anirudh_kulkarni_cv.pdf' download><button className='btn btn-outline-light downloadButton'>Click here to download My resume!</button></a>
    </div>
  )
}

export default Profile