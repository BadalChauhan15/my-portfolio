import React from 'react';
import './css/Education.css';

function Education() {
  return (
    <section id="education" style={{ justifyContent: 'flex-end', textAlign: 'left', marginLeft: '15px', marginRight: '15px', marginBottom: '30px', display: "flex", alignItems: "center", flexDirection: "column", color: '#000000' }}>
      <h2>Education</h2>
      <div className='education'>
        <ul>
          <li>Bachelors in Computer Science, Krishna College of Science & IT - Bijnor, 2018-2021</li>
          <li>Masters in Computer Applications, Graphic Era Hill University - Dehradun, 2021-2023</li>
        </ul>
      </div>
    </section>
  );
}

export default Education;