import React from 'react';
import Project_1 from './images/project1.jpg';
import Project_2 from './images/project_2.png';
import Project_3 from './images/project_3.png';
import './css/Project.css';

function ProjectCarousel() {

  return (
    <section id="projects" style={{ marginLeft: '15px', marginRight: '15px', display: "flex", alignItems: "center", flexDirection: "column", color: '#000000' }}>
      <h2>Personal Projects</h2>

      <div className="project-container">
        <img src={Project_3} alt="Project 1" className="project-image" />
        <div className="project-details">
          <h3>Portfolio Website</h3>
          <p>
            Portfolio Website, developed using HTML5, CSS, & JavaScript.
            This website is made only learning purpose and only contains static pages.
          </p>
          <a href="https://myhtmlportfolio.netlify.app" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
      </div>
      
      <div className="project-container">
        <img src={Project_2} alt="Project 1" className="project-image" />
        <div className="project-details">
          <h3>Company Card</h3>
          <p>
            Company Card Website, developed using ReactJS, Vanilla CSS, APIs & Axios.
            This website is fetching an api having employees detail and displaying all the information of employees on the website in the form of cards.
          </p>
          <a href="https://companycard.netlify.app" target="_blank" rel="noopener noreferrer" className='btn'>View Project</a>
        </div>
      </div>

    </section>
  );
}

export default ProjectCarousel;