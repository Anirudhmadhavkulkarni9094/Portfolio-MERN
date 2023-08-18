import React from 'react'
import C from '../Resources/Img/c.png'
import Cpp from '../Resources/Img/c++.png'
import css from '../Resources/Img/css.png'
import docker from '../Resources/Img/docker.png'
import Express from '../Resources/Img/Express.png'
import git from '../Resources/Img/git.png'
import github from '../Resources/Img/github.png'
import html from '../Resources/Img/HTML.png'
import java from '../Resources/Img/java.png'
import js from '../Resources/Img/js.png'
import linux from '../Resources/Img/linux.png'
import mongoDB from '../Resources/Img/MongoDB (1).png'
import mysql from '../Resources/Img/mySQL.png'
import node from '../Resources/Img/Node.png'
import postman from '../Resources/Img/postman.png'
import react from '../Resources/Img/react.png'
import window from '../Resources/Img/window.png'
import python from '../Resources/Img/python.png'
import '../Resources/StyleSheet/Skill.css'

function Skills() {
  return (
    <div>
      <div className='skill-page'>
      <ul>
      <li>

      <p>Languages</p>
      <div className='Skill-list'>
        <img src={C}></img>
        <img src={Cpp}></img>
        <img src={java}></img>
        <img src={python}></img>
      </div>
      </li>
      <li>

      <p>Frame-works</p>
      <div className='Skill-list'>
        <img src={html}></img>
        <img src={css}></img>
        <img src={js}></img>
        <img src={react}></img>
        <img src={node}></img>
        <img src={Express}></img>
      </div>
      </li>
      <li>

      <p>Databases</p>
      <div className='Skill-list'>
        <img src={mysql}></img>
        <img src={mongoDB}></img>
      </div>
      </li>
      <li>

      <p>Tools</p>
      <div className='Skill-list'>
        <img src={git}></img>
        <img src={github}></img>
        <img src={docker}></img>
        <img src={postman}></img>
      </div>
      </li>
      <li>
      <p>Operating systems</p>
      <div className='Skill-list'> 
        <img src={window}></img>
        <img src={linux}></img>
      </div>
      </li>
      </ul>
      </div>
    </div>
  )
}


export default Skills