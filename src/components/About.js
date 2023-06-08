import React from 'react';
import aboutBG from './about_background.jpg';

function About() {

  const buttonStyle = {
    alignSelf: 'flex-start', 
    marginTop: '15px',  
    borderRadius: "5px", 
    backgroundColor: "#27ae60", 
    color: "white", 
    border: "none", 
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    "hover": {
      backgroundColor: '#adb5bd'
    }
  };

  return (
    <section id="about" style={{ 
      margin: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column',
      padding: '0 20%',
      color: 'Black'
    }}>
      <h2 style={{ textAlign: 'left', color: '#000000' }}>Badal Chauhan</h2>
      <p style={{ textAlign: 'left' }}>I am a Full Stack Web Developer and an UI/UX Designer. I am Passionate, resilient, and quick learner. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Equipped with a diverse and promising skill-set.</p>
      <a href='https://drive.google.com/uc?export=download&id=1Y5nu7viFmAYYIDlTqWUGiavqleeUvkkt' style={{textDecoration: 'none', alignSelf: 'flex-start', 
    marginTop: '15px',  
    borderRadius: "5px", 
    backgroundColor: "#27ae60", 
    color: "white", 
    border: "none", 
    padding: '10px 20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    "hover": {
      backgroundColor: '#adb5bd'
    } }}>Download Resume</a>
    </section>
  );
}

export default About;