import React from 'react';
import Skill_1 from './images/html.jpg';
import Skill_2 from './images/css.jpg';
import Skill_3 from './images/js.jpg';

function Skills() {

  return (
    <section id="skills" style={{ margin: '15px', display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ color: '#000000' }}>Skills</h1>
      <div>
        <img src={Skill_1} alt="Skill 1" style={{ marginLeft: '10px', marginRight: '10px', width: '200px' }}/>
        <img src={Skill_3} alt="Skill 3" style={{ width: '200px' }}/>
        <img src={Skill_2} alt="Skill 2" style={{ marginLeft: '10px', marginRight: '10px', width: '200px' }}/>
      </div>
    </section>
    
  );
}

export default Skills;