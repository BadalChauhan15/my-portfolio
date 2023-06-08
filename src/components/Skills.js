import React from 'react';
import Skill_1 from './images/html-5.png';
import Skill_2 from './images/css-3.png';
import Skill_3 from './images/js.png';
import Skill_4 from './images/php-mysql.png';
import Skill_5 from './images/react.png';
import Skill_6 from './images/angular.png';
import Skill_7 from './images/nodejs.png';
import Skill_8 from './images/mongoDB.png';
import Skill_9 from './images/jquery.png';
import Skill_10 from './images/c.png';
import Skill_11 from './images/c++.png';
import Skill_12 from './images/java.png';
import Skill_13 from './images/python.png';


function Skills() {

  return (
    <section id="skills" style={{ marginLeft: '50px', marginRight: '50px', marginBottom: '50px', display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h1 style={{ color: '#000000' }}>Skills</h1>
      <marquee behavior="scroll" scrollamount="15">
      <div>
        <img src={Skill_1} alt="Skill 1" style={{ marginLeft: '10px', marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_2} alt="Skill 2" style={{ marginRight: '78px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_3} alt="Skill 3" style={{ marginRight: '90px', width: '60px', marginTop: '15px' }}/>
        <img src={Skill_4} alt="Skill 4" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_5} alt="Skill 5" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_6} alt="Skill 6" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_7} alt="Skill 7" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_8} alt="Skill 8" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_9} alt="Skill 9" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_10} alt="Skill 10" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_11} alt="Skill 11" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_12} alt="Skill 12" style={{ marginRight: '70px', width: '80px', marginTop: '15px' }}/>
        <img src={Skill_13} alt="Skill 13" style={{ marginRight: '10px', width: '80px', marginTop: '15px' }}/>
      </div>
      </marquee>
      
    </section>
    
  );
}

export default Skills;