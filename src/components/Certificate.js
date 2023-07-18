import React from 'react';
import Cert_1 from './images/cert1.jpg';
import Cert_2 from './images/cert2.jpg';

function Certificate() {
  return (
    <section id="certificates" style={{ margin: '15px', display: "flex", alignItems: "center", flexDirection: "column" }}>
      <h2 style={{ color: '#000000' }}>Certificates</h2>
      <div>
        <img src={Cert_1} alt="Certificate 1" style={{ margin: '10px', width: '350px' }}/>
        <img src={Cert_2} alt="Certificate 2" style={{ margin: '10px', width: '350px' }}/>
      </div>
    </section>
  );
}

export default Certificate;