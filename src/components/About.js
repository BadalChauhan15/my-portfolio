import React from 'react';
import './css/About.css';

function About() {

  return (
    <section className='about' id="about">
      <h2 style={{ textAlign: 'left', color: '#000000' }}>Badal Chauhan</h2>
      <p style={{ textAlign: 'justify' }}>I am a Full Stack Web Developer and an UI/UX Designer. I am Passionate, resilient, and quick learner. Able to effectively self-manage during independent projects, as well as collaborate in a team setting. Equipped with a diverse and promising skill-set.</p>
      <a href='https://drive.google.com/uc?export=download&id=1BJpQxNmCeEagKVIkE02kfwCJ_kdUxtxx' className='btn'>
        Download Resume
      </a>
    </section>
  );
}

export default About;