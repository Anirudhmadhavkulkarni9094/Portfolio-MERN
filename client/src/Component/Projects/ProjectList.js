import React from 'react';
import '../Resources/StyleSheet/Project.css';

function ProjectList({project}) {
  return (
    <div className='col-lg-4 col-md-6 col-sm-12'>

    <div className="card-container">
      <div className="card">
        <h2>{project.title}</h2>
      </div>
      <div className="description-card bg-dark">
        <p className='bg-dark'>{project.description}</p>
      <a href={project.link}><button className='button'>Go to project <i class="bi bi-link-45deg "></i></button></a>
      </div>
    </div>
    </div> 
  );
}

export default ProjectList;
