import React from 'react';
import Project_1 from './images/project1.jpg';
import Project_2 from './images/project_2.png';
import Project_3 from './images/project_3.png';

function ProjectCarousel() {

  return (
    <section id="projects" style={{ marginLeft: '15px', marginRight: '15px', display: "flex", alignItems: "center", flexDirection: "column", color: '#000000' }}>
      <h2>Personal Projects</h2>
      <div style={{ color: '#000000', marginBottom: '50px'}} >
        <img src={Project_1} alt="Project 1" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Restaurant App</h3>
        <p>
          Restaurant App, developed using ReactJS, TailwindCSS, NodeJS, & Firebase.
        </p>
        <p>
          This app is for individual business for selling Foods, Fruits and Beverages.
        </p>
        <a href="https://github.com/BadalChauhan15/restaurantapp" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>

      <div style={{ color: '#000000', marginBottom: '50px' }}>
        <img src={Project_2} alt="Project 2" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Company Card</h3>
        <p>
          Company Card Website, developed using ReactJS, TailwindCSS, & NodeJS.
        </p>
        <p>
          This website is fetching an api having employees detail and displaying all the information of employees on the website in the form of cards.
        </p>
        <a href="https://github.com/BadalChauhan15/Company_Card" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>

      <div style={{ color: '#000000', marginBottom: '50px' }}>
        <img src={Project_3} alt="Project 3" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Portfolio Website</h3>
        <p>
          Portfolio Website, developed using HTML5, CSS, & JavaScript.
        </p>
        <p>
          This website is made only learning purpose and only contains static pages.
        </p>
        <a href="https://github.com/BadalChauhan15/MyPortfolioWebsite" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>
    </section>
  );
}

export default ProjectCarousel;