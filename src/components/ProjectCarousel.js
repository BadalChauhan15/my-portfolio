import React from 'react';
import Project_1 from './images/project1.jpg';

function ProjectCarousel() {

  return (
    <section id="projects" style={{ marginLeft: '15px', marginRight: '15px', display: "flex", alignItems: "center", flexDirection: "column", color: '#000000' }}>
      <h2>Projects</h2>
      <div style={{ color: '#000000', marginBottom: '25px' }} >
        <img src={Project_1} alt="Project 1" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Restaurant App</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod mollis risus a lobortis. 
        </p>
        <a href="https://github.com/BadalChauhan15/restaurantapp" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>

      <div style={{ color: '#000000', marginBottom: '25px' }}>
        <img src={Project_1} alt="Project 1" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Company Card</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod mollis risus a lobortis. 
        </p>
        <a href="https://github.com/BadalChauhan15/Company_Card" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>

      <div style={{ color: '#000000', marginBottom: '15px' }}>
        <img src={Project_1} alt="Project 1" style={{ maxWidth: "100%", maxHeight: "220px" }} />
        <h3>Portfolio Website</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod mollis risus a lobortis. 
        </p>
        <a href="https://github.com/BadalChauhan15/MyPortfolioWebsite" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '14px', textDecoration: 'none', padding: "10px 20px", borderRadius: "5px", backgroundColor: "#27ae60", border: "none", cursor: 'pointer' }}>View Project</a>
      </div>
    </section>
  );
}

export default ProjectCarousel;