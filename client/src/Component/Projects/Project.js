import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProjectList from './ProjectList';


function Project() {
      const [Projects , setProjects] = useState([]);   
      
      useEffect(()=>{
        axios.get('http://localhost:3001/get-projects').then(res=>{
          setProjects(res.data.data);
        }).catch(err=>{
          console.log(err);
        })
      })

      return (
        <div className='row mx-5'>
          {Projects.map((project, index) => (
            <ProjectList key={index} project = {project}/>
          ))}
        </div>
      );
    }

export default Project